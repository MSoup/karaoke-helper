"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var dotenv = require("dotenv");
var path_1 = require("path");
var axios_1 = require("axios");
// Hide .env in production
if (process.env.NODE_ENV !== 'production') {
    dotenv.config({ path: path_1["default"].resolve(__dirname, "../../.env") });
}
// CONSTANTS FOR API CALLS
var headers = {
    'Authorization': "Bearer ".concat(process.env.GENIUS_ACCESS_TOKEN),
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};
var BASE_URL = "https://api.genius.com";
var getSongs = function (artistName, limit) {
    if (limit === void 0) { limit = 10; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, options, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = "search";
                    options = {
                        headers: headers,
                        params: { q: artistName }
                    };
                    results = [];
                    return [4 /*yield*/, axios_1["default"].get("".concat(BASE_URL, "/").concat(endpoint), options)
                            .then(function (res) {
                            var hits = res.data.response.hits;
                            console.log("Found ".concat(hits.length, " songs"));
                            // Filter data from hits and construct object of id, title, and thumbnails
                            hits.forEach(function (hit) {
                                if (hit.type === "song") {
                                    var song = {
                                        id: hit.result.id,
                                        title: hit.result.title,
                                        api_path: hit.result.api_path,
                                        album_thumbnail: hit.result.song_art_image_thumbnail_url,
                                        full_thumbnail: hit.result.song_art_image_url
                                    };
                                    results.push({ song: song });
                                }
                            });
                        })["catch"](function (err) { return err; })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, results.slice(0, limit)];
            }
        });
    });
};
var getLyrics = function (songId) { return __awaiter(void 0, void 0, void 0, function () {
    var endpoint, options;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "songs";
                options = {
                    headers: headers
                };
                // let result: string = []
                return [4 /*yield*/, axios_1["default"].get("".concat(BASE_URL, "/").concat(endpoint, "/").concat(songId), options)
                        .then(function (res) {
                        console.log(res);
                    })];
            case 1:
                // let result: string = []
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // Test case 1:
            // Get Yoasobi Songs
            // await getSongs("Yoasobi")
            //     .then(result => console.log(result))
            // Test case 2:
            // Get BTS Songs
            // await getSongs("BTS")
            // .then(result => console.log(result))
            // Song ID 5918673 
            // Should return lyrics for YOASOBI - Gunjou (Romanized)
            return [4 /*yield*/, getLyrics(5918673)];
            case 1:
                // Test case 1:
                // Get Yoasobi Songs
                // await getSongs("Yoasobi")
                //     .then(result => console.log(result))
                // Test case 2:
                // Get BTS Songs
                // await getSongs("BTS")
                // .then(result => console.log(result))
                // Song ID 5918673 
                // Should return lyrics for YOASOBI - Gunjou (Romanized)
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
main();
