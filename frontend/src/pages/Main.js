import Tile from '../components/Tile'
import './Main.css';

function Main() {
  const searchBar = <div id="search-bar">Search by Keyword</div>;
  const searchCategories = ['Artist','Song Title','Album','Genre','History'];
  const changeSearch = category => {
    console.log(category);
  }
  const categoryTiles = searchCategories
    .map(category => <Tile
      title={category}
      />);

  return (
    <div className="Main">
      {/* Search Bar */}
      {searchBar}

      {/* Tiles */}
      {categoryTiles}
    </div>
  );
}
  
export default Main;
  