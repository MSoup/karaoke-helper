const path = require('path')
const genius_api = require('simple-oauth2')
const axios = require('axios')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config(
        {path: path.resolve(__dirname, "../../.env")}
    );
  }

const testURL = `https://api.genius.com/annotations/10225840`

const options = {
    'headers': {
        'Authorization': `Bearer ${process.env.GENIUS_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
}


axios.get(testURL, options)
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    })