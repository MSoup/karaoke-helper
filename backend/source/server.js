"use strict";
var _a;
exports.__esModule = true;
var http = require("http");
var express_1 = require("express");
var morgan = require("morgan");
var load_env_1 = require("./helpers/load_env");
var getCookie_1 = require("./helpers/getCookie");
var axios_1 = require("axios");
(0, load_env_1["default"])();
var router = (0, express_1["default"])();
// This is for logging
router.use(morgan('tiny'));
// Parse requests
router.use(express_1["default"].urlencoded({ extended: false }));
// Takes care of json data
router.use(express_1["default"].json());
// API rules
router.use(function (req, res, next) {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        // Allow GET only for now
        // res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        res.header('Access-Control-Allow-Methods', 'GET');
        return res.status(200).json({});
    }
    next();
});
var SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
var SPOTIFY_SECRET = process.env.SPOTIFY_SECRET;
var SPOTIFY_REDIRECT_URL = process.env.SPOTIFY_REDIRECT_URI;
var SCOPE = 'user-read-private user-read-email';
var stateKey = 'spotify_auth_state';
var querystring = new URLSearchParams({
    response_type: 'code',
    client_id: SPOTIFY_CLIENT_ID,
    scope: SCOPE,
    redirect_uri: SPOTIFY_REDIRECT_URL
});
router.get('/login', function (req, res) {
    var state = (0, getCookie_1["default"])(16);
    // assign cookie
    res.cookie(stateKey, state);
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring);
});
router.get('/callback', function (req, res) {
    var code = req.query.code || null;
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;
    if (state === null || state !== storedState) {
        res.redirect('/#' + new URLSearchParams({ error: 'state_mismatch' }));
    }
    else {
        res.clearCookie(stateKey);
        var authOptions = {
            code: code,
            redirect_uri: SPOTIFY_REDIRECT_URL,
            grant_type: 'authorization_code',
            headers: {
                'Authorization': "Basic ".concat(SPOTIFY_CLIENT_ID, ":").concat(SPOTIFY_SECRET)
            },
            json: true
        };
        axios_1["default"].post('https://accounts.spotify.com/api/token', authOptions)
            .then(function (res) { return console.log(res); });
    }
});
// Error handling
router.use(function (req, res, next) {
    var error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});
/** Server */
var httpServer = http.createServer(router);
var PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 6060;
httpServer.listen(PORT, function () { return console.log("The karaoke server is running on port ".concat(PORT)); });
