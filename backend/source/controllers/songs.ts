import {} from 'dotenv/config'
import axios from 'axios';

const token = process.env.BEARER_TOKEN;

// CONSTANTS FOR API CALLS
const options = {
  params: { limit: 10, offset: 0 },
  headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
  },
};

const getSongsByTrack = function (query :String, limit :Number = 10 ) {
  console.log(options);
  const url=`https://api.spotify.com/v1/search?q=${query}&type=track&limit=${limit}`;

  axios.get(url, options)
    .then((data) => {
      const results = data.data.tracks.items;
      results.map(song => console.log(song.name)); //log 10 song names
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export default {
  getSongsByTrack
};