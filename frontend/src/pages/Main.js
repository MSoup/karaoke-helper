import Tile from '../components/Tile'
import './Main.css';

function Main() {
  const searchBar = <div id="search-bar">Search</div>;

  return (
    <div className="Main">
      {/* Search Bar */}
      {searchBar}
      <Tile title={'Title'} />
      <Tile title={'Title'} />
      <Tile title={'Title'} />
      <Tile title={'Title'} />
      <Tile title={'Title'} />
      <Tile title={'Title'} />
    </div>
  );
}
  
export default Main;
  