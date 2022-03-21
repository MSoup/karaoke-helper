import load_env from "../helpers/load_env"

describe('load_env', () => {
    it("should load env variables when production is false", () => {
        load_env({production: false})
        const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
        const SPOTIFY_SECRET = process.env.SPOTIFY_SECRET
        const SPOTIFY_REDIRECT_URL = process.env.SPOTIFY_REDIRECT_URI
        expect(SPOTIFY_CLIENT_ID).not.toBeNull()
        expect(SPOTIFY_SECRET).not.toBeNull()
        expect(SPOTIFY_REDIRECT_URL).not.toBeNull()
    })

    it("should NOT load env variables when production is true", () => {
        expect(() => load_env({production: true})).toThrow()
    })

})
