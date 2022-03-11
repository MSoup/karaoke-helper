import Tile from '../components/Tile'
import SearchBar from '../components/SearchBar'
import './Main.css';
import Results from '../components/Results';
import { useEffect, useState } from 'react';
import axios from 'axios';

// CONSTANTS FOR API CALLS
var options = {
    params: { limit: 10, offset: 0 },
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + process.env.BEARER_TOKEN,
        'Content-Type': 'application/json'
    }
};

function Main() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  
  const limit = 10;
  useEffect(() => {
    var url = "https://api.spotify.com/v1/search?q=".concat(term, "&type=track&limit=").concat(limit);
    axios["default"].get(url, options)
        .then(data => {
        const results =  data.data.tracks.items;
        setResults(results);
        console.log(results);
    })["catch"](function (err) {
        console.log(err.response);
    });
  }, [term]);

  const searchCategories = ['Universe','Yoasobi','Daft Punk','Genre','History'];
  const categoryTiles = searchCategories
    .map(category => <Tile
      key={category}
      title={category}
      term={term}
      setTerm={setTerm}
      />);
  return (
    <div className="Main">
      {/* <SearchBar onSearch={term => setTerm(term)} /> */}
      {/* <SearchBar /> */}
      <Results results={results} />
      {/* Tiles */}
      {categoryTiles}
    </div>
  );
}
  
export default Main;
  