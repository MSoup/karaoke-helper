import './Main.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Tile from '../components/Tile'
import SearchBar from '../components/SearchBar'
import Results from '../components/Results';
import { Grid } from '@mui/material';
import { formControlUnstyledClasses } from '@mui/base';

function Main() {
  const [term, setTerm] = useState("");
  const [type, setType] = useState("track");
  const [results, setResults] = useState([]);
  
  const onCancel = () => {
    setTerm('Keyword');
    // setValue('');
  }

  const limit = 10;
  const options = {
    params: { limit: 10, offset: 0 },
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + process.env.BEARER_TOKEN,
        'Content-Type': 'application/json'
    }
  };
  useEffect(() => {
    const url = `https://api.spotify.com/v1/search?q=${term}&type=${type}`;
    axios["default"].get(url, options)
      .then(data => {
      console.log(data);
      const results = data.data[`${type}s`].items;
      setResults(results);
      console.log('results ----> ',results);
    })["catch"](function (err) {
      console.log(err.response);
    });
  }, [term]);

  const searchCategories = ['Artist','Track','Album','Playlist','Keyword'];
  const categoryTiles = searchCategories
    .map(category => <Grid item xs={6} lg={4}>
        <Tile
          key={category}
          title={category}
          type={type}
          setType={setType}
        />
      </Grid>);

  return (
    <div className="Main">
      {/* <SearchBar /> */}
      <SearchBar type={type} onCancel={onCancel} onSearch={term => setTerm(term)} />

      {/* Search Results */}
      <Results results={results} type={type} />

      {/* Tiles */}
      <Grid container spacing={2}>
        {categoryTiles}
      </Grid>
    </div>
  );
}
  
export default Main;
  