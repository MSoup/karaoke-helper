import http from 'http';
import express, {Express} from 'express';
import morgan from 'morgan';
import load_env from "./helpers/load_env";
import getCookie from "./helpers/getCookie";
import axios from 'axios';


load_env()

const router: Express = express();

// This is for logging
router.use(morgan('tiny'));
// Parse requests
router.use(express.urlencoded({extended: false}))
// Takes care of json data
router.use(express.json())
// API rules
router.use((req, res, next) => {
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

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const SPOTIFY_SECRET = process.env.SPOTIFY_SECRET
const SPOTIFY_REDIRECT_URL = process.env.SPOTIFY_REDIRECT_URI
const SCOPE = 'user-read-private user-read-email'
const stateKey = 'spotify_auth_state'

if (!(SPOTIFY_CLIENT_ID && SPOTIFY_REDIRECT_URL)) {
    throw new Error('Could not get auth token') 
}

let querystring = new URLSearchParams({
        response_type: 'code',
        client_id: SPOTIFY_CLIENT_ID,
        scope: SCOPE,
        redirect_uri: SPOTIFY_REDIRECT_URL,
    })

router.get('/login', function(req, res) {
    const state = getCookie(16)

    // assign cookie
    res.cookie(stateKey, state)
    console.log("State during login", state)
    querystring.append(state, state)
    res.redirect('https://accounts.spotify.com/authorize?' + querystring)
});

router.get('/callback', function(req, res) {
    const code = req.query.code || null
    const state = req.query.state || null
    const storedState = req.cookies ? req.cookies[stateKey] : null;
    console.log("Callback triggered")

    // check cookie state
    if (state === null || state !== storedState) {
        console.log(state)
        console.log(storedState)
        res.redirect('/#' + new URLSearchParams({error: 'state_mismatch'}))
    } 
    else {
        console.log("Else triggered in oauth flow")
        res.clearCookie(stateKey)
        const authOptions = {
            code: code,
            redirect_uri: SPOTIFY_REDIRECT_URL,
            grant_type: 'authorization_code',
            headers: {
                'Authorization': `Basic ${SPOTIFY_CLIENT_ID}:${SPOTIFY_SECRET}`
            },
            json: true
        }
        axios.post('https://accounts.spotify.com/api/token', authOptions)
            .then(res => console.log(res))
    }
})

// https://accounts.spotify.com/authorize?scope=user-read-private+user-read-email&response_type=code&redirect_uri=localhost%3A6060%2Fcallback&client_id=127d68b577c74f9ca38bfcd79a1146e7


// Error handling

router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/** Server */
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 6060;
httpServer.listen(PORT, () => console.log(`The karaoke server is running on port ${PORT}`));