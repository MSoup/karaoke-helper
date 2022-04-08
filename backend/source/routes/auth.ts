import express, {Express} from 'express';
import getCookie from "../helpers/getCookie";
import load_env from "../helpers/load_env";
import axios from 'axios';

load_env({production: false})

const router: Express = express();

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
router.get('/', function(req, res) {
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
            console.log(access_token)
            console.log(refresh_token)
            // TODO : how to send access/refresh token back to client? or do I even need to do this?
            res.status(200).json({
                access_token: access_token,
                refresh_token: refresh_token,
                date: new Date().toDateString,
            })
        })
        .catch(err => console.log(err))
    })

export = router