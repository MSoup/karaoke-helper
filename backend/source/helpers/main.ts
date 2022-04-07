import { getSongsFromArtist, getLyricsUrl } from "./genius_api"
import type { Song } from "./typings"
import axios from 'axios'
import jsdom from 'jsdom'

// Goal: Find "In The End", "Yoru Ni Kakeru", "Living Again"

const fetchSongs = async (artist: string): Promise<Song[]> => {
    const songList = await getSongsFromArtist(artist)
    songList.forEach(song => {
        console.log(song)
    })
    return songList
}

const fetchLyrics = async (id: number) => {
    const songUrl = await getLyricsUrl(id)
    const doc = await axios.get(songUrl)
    // TODO: parse the grab the class="lyrics" div and save the lyrics into a JSON???
    const {JSDOM} = jsdom

    const document = new JSDOM(doc.data)
    console.log(document.serialize())
    // console.log(dom.window.document.querySelector(".lyrics").textContent)
}

fetchLyrics(49719)

// Above should return a list of songs for Linkin Park!
//     {
//       id: 49719,
//       title: 'In the End',
//       artist_names: 'Linkin Park',
//       api_path: '/songs/49719',
//       album_thumbnail: 'https://images.genius.com/99b120c80b19d34dc589096a98b2fabc.300x300x1.png',
//       full_thumbnail: 'https://images.genius.com/99b120c80b19d34dc589096a98b2fabc.1000x1000x1.png'
//     }

