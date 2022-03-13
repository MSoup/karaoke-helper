import load_env from "./load_env"

load_env()

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_SECRET
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI


console.log(client_id, client_secret, redirect_uri)