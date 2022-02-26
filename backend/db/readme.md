# Dev notes
Nodemon has been installed, so please run with `npm run serve`

The data being used is not stored in a db, but created in api.js for the time being. The below endpoints are also subject to change:

```js
app.get('/songs/', api.getAllSongs);
app.get('/song/:id', api.getSongById);
app.post('/songs/', api.addSong);
app.put('/song/:id', api.updateSong);
app.delete('/song/:id', api.deleteSong);
```