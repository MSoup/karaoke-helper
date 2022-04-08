import { getSongsFromArtist, getLyricsUrl } from "./genius_api"
import type { Song } from "./typings"
import axios from 'axios'
import jsdom from 'jsdom'
import { getLyrics, getSong } from 'genius-lyrics-api';

// Goal: Find "In The End", "Yoru Ni Kakeru", "Living Again"

import load_env from "./load_env"

// Load environment variables
load_env({production: false})

const options = {
	apiKey: process.env.GENIUS_ACCESS_TOKEN,
	title: 'In The End',
	artist: 'Linkin Park',
	optimizeQuery: true
};

getLyrics(options).then((lyrics) => console.log(lyrics));

getSong(options).then((song) =>
	console.log(`
	${song.id}
	${song.title}
	${song.url}
	${song.albumArt}
	${song.lyrics}`)
);


// Above should return a list of songs for Linkin Park!
//     {
//       id: 49719,
//       title: 'In the End',
//       artist_names: 'Linkin Park',
//       api_path: '/songs/49719',
//       album_thumbnail: 'https://images.genius.com/99b120c80b19d34dc589096a98b2fabc.300x300x1.png',
//       full_thumbnail: 'https://images.genius.com/99b120c80b19d34dc589096a98b2fabc.1000x1000x1.png'
//     }

