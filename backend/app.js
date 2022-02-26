const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Karaoke app running on port ${port}.`)
})


const api = require('./api');

app.get('/songs/', api.getAllSongs);
app.get('/song/:id', api.getSongById);
app.post('/songs/', api.addSong);
app.put('/song/:id', api.updateSong);
app.delete('/song/:id', api.deleteSong);