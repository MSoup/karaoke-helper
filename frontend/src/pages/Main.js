import Tile from '../components/Tile'
import SearchBar from '../components/SearchBar'
import './Main.css';

function Main() {
  const searchCategories = ['Artist','Song Title','Album','Genre','History'];
  const changeSearch = category => {
    console.log(category);
  }
  const categoryTiles = searchCategories
    .map(category => <Tile
      key={category}
      title={category}
      />);

  return (
    <div className="Main">
      <SearchBar />

      {/* Tiles */}
      {categoryTiles}
    </div>
  );
}
  
export default Main;
  