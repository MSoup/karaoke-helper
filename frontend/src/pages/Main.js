import './Main.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Tile from '../components/Tile'
import SearchBar from '../components/SearchBar'
import Results from '../components/Results';
import { Grid } from '@mui/material';

function Main() {
  const [term, setTerm] = useState("");
  const [type, setType] = useState("Keyword");
  const [results, setResults] = useState([]);
  
  const limit = 10;
  const options = {
    params: { limit: 10, offset: 0 },
    headers: {
        Accept: 'application/json',
        // Authorization: 'Bearer ' + process.env.BEARER_TOKEN,
        Authorization: 'Bearer ' + 'BQDITpK7NEZvpBhnuEer3DiY3IUkUrviZW3hS8UThIwSMA0IVcMlbWB_Ga0z36ljCvvsM_yFkQC5TbF23ZY',
        'Content-Type': 'application/json'
    }
  };
  useEffect(() => {
    const url = `https://api.spotify.com/v1/search?q=${term}&type=track&limit=${limit}`;
    axios["default"].get(url, options)
      .then(data => {
      const results =  data.data.tracks.items;
      setResults(results);
      console.log('results ----> ',results);
    })["catch"](function (err) {
      console.log(err.response);
    });
  }, [term]);

  const searchCategories = ['Artist','Song','Album','Anime','Genre','History'];
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
      <SearchBar type={type} onSearch={term => setTerm(term)} />

      {/* Search Results */}
      <Results results={results} />

      {/* Tiles */}
      <Grid container spacing={2}>
        {categoryTiles}
      </Grid>
    </div>
  );
}
  
export default Main;
  