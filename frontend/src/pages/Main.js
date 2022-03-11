import './Main.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Tile from '../components/Tile'
import SearchBar from '../components/SearchBar'
import Results from '../components/Results';

function Main() {
  const [term, setTerm] = useState("");
  const [type, setType] = useState("");
  const [results, setResults] = useState([]);
  
  const limit = 10;
  const options = {
    params: { limit: 10, offset: 0 },
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + 'BQBkqCLQtiKX5AJXVDund3FpJgwvBrHVJ5w0Iq3rGyoVCuU9GApz0ye8KeRIjAGbJqJIiaJKsJaGWsBePvI',
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
    .map(category => <Tile
      key={category}
      title={category}
      type={type}
      setType={setType}
      />);
  return (
    <div className="Main">
      <SearchBar onSearch={term => setTerm(term)} />
      {/* <SearchBar /> */}
      <Results results={results} />
      {/* Tiles */}
      {categoryTiles}
    </div>
  );
}
  
export default Main;
  