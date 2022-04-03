import { getSongsFromArtist, getLyricsUrl } from "./genius_api"

// Goal: Find "In The End", "Yoru Ni Kakeru", "Living Again"

// TODO
const storeSongs = async (artist: string): Promise<Song[]> => {
    const songList = await getSongsFromArtist(artist)
    songList.forEach(song => {
        console.log(song.id)
    })
    return songList
}

storeSongs("Linkin Park")

// Above should return a list of songs for Linkin Park!
//     {
//       id: 49719,
//       title: 'In the End',
//       artist_names: 'Linkin Park',
//       api_path: '/songs/49719',
//       album_thumbnail: 'https://images.genius.com/99b120c80b19d34dc589096a98b2fabc.300x300x1.png',
//       full_thumbnail: 'https://images.genius.com/99b120c80b19d34dc589096a98b2fabc.1000x1000x1.png'
//     }

