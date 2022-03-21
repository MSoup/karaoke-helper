import axios from 'axios'
import load_env from "./load_env"

// Load environment variables
// Exposes the following:
// SPOTIFY_CLIENT_ID
// SPOTIFY_SECRET
// SPOTIFY_REDIRECT_URI

load_env({production: false})

// CONSTANTS FOR API CALLS
const headers = {
    'Authorization': `Bearer ${process.env.GENIUS_ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    }

const BASE_URL = `https://api.genius.com`

console.log("Reached end of file for spotify auth")