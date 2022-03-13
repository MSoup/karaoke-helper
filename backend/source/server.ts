import http from 'http';
import express, {Express} from 'express';
import morgan from 'morgan';
import load_env from "./helpers/load_env";
import getCookie from "./helpers/getCookie";
import axios from 'axios';
import cookieParser from 'cookie-parser';

load_env()

const router: Express = express();

// Logging
router.use(morgan('tiny'));
// Parse requests
router.use(express.urlencoded({extended: false}))
// Parse JSON
router.use(express.json())
// Cookies
router.use(cookieParser())
// API rules
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        // Allow GET only
        res.header('Access-Control-Allow-Methods', 'GET');
        return res.status(200).json({});
    }
    next();
});

// constants: import .env variables and declare scopes/cookie for client
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const SPOTIFY_SECRET = process.env.SPOTIFY_SECRET
const SPOTIFY_REDIRECT_URL = process.env.SPOTIFY_REDIRECT_URI
const SCOPE = 'user-read-private user-read-email'
const stateKey = 'spotify_auth_state'

// If unable to fetch from .env, throw error
if (!(SPOTIFY_CLIENT_ID && SPOTIFY_REDIRECT_URL && SPOTIFY_SECRET)) {
    throw new Error('Could not get auth token') 
}

// Auth start
// Based off of the Spotify documentation here
// https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
router.get('/login', function(req, res) {
    const state = getCookie(16)

    const querystring = new URLSearchParams({
        response_type: 'code',
        client_id: SPOTIFY_CLIENT_ID,
        scope: SCOPE,
        redirect_uri: SPOTIFY_REDIRECT_URL,
        state: state,
    })

    // assign cookie
    res.cookie(stateKey, state)
    res.redirect('https://accounts.spotify.com/authorize?' + querystring.toString())
});

// The callback contains two query parameters: code and state
router.get('/callback', function(req, res) {
    // 
    const code = req.query.code || null
    const state = req.query.state || null
    const storedState = req.cookies ? req.cookies[stateKey] : null;

    // check cookie state
    if (state === null || state !== storedState) {
        res.redirect('/#' + new URLSearchParams({error: 'state_mismatch'}))
    } 
    else {
        console.log("Else triggered in oauth flow")
        res.clearCookie(stateKey)
        }
        axios({
            url: 'https://accounts.spotify.com/api/token',
            method: 'POST',
            params: {
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: SPOTIFY_REDIRECT_URL,
                client_id: SPOTIFY_CLIENT_ID,
                client_secret: SPOTIFY_SECRET
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },

        })
        .then(res => {
            const data = res.data
            const access_token = data.access_token
            const refresh_token = data.refresh_token
            return {
                access_token: access_token,
                refresh_token: refresh_token,
                date: new Date().toDateString,
            }
        })
        .catch(err => console.log(err))
    })

// Error handling

router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
    next()
});

/** Server */
const httpServer = http.createServer(router);
const PORT = process.env.PORT ?? 6060;
httpServer.listen(PORT, () => console.log(`The karaoke server is running on port ${PORT}`));