import axios from 'axios'
import load_env from "./load_env"

// Load environment variables
load_env()

// CONSTANTS FOR API CALLS
const headers = {
    'Authorization': `Bearer ${process.env.GENIUS_ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    }

const BASE_URL = `https://api.genius.com`


const getSongs = async (artistName: string, limit =10): Promise<object[]> => {
    const endpoint = "search"
    const options = {
        headers,
        params: {q: artistName}
    }

    const results: object[] = []

    await axios.get(`${BASE_URL}/${endpoint}`, options)
        .then(res => {
            const hits = res.data.response.hits
            console.log(`Found ${hits.length} songs`)
            // Filter data from hits and construct object of id, title, and thumbnails
            hits.forEach(hit => {
                if (hit.type === "song") {
                    const song = {
                        id: hit.result.id,
                        title: hit.result.title,
                        api_path: hit.result.api_path,
                        album_thumbnail: hit.result.song_art_image_thumbnail_url,
                        full_thumbnail: hit.result.song_art_image_url,
                    }
                    results.push({song})
                }
            })
        })
        .catch(err => {return err})

    return results.slice(0,limit)

}

const getLyricsUrl = async (songId: number): Promise<string> => {
    const endpoint = "songs"
    const options = {
        headers,
    }

    const result = ""

    await axios.get(`${BASE_URL}/${endpoint}/${songId}`, options)
        .then(res => {
            const songUrl = res.data.response.song.url
            console.log(songUrl)
        })
        .catch(err => console.log(err))
    return result
}