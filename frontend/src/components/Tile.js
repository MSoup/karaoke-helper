// Tile (search by xx) component on main page

function Tile(props) {
  const {title, type, setType} = props;
  const tileClass = (type == title.toLowerCase()) ? 'tile tile-selected' : 'tile';
  return (
    <div className={tileClass} onClick={() => setType(title.toLowerCase())}>
      {(type == title.toLowerCase()) ? <strong><p>{title}</p></strong> : <p>{title}</p>}
    </div>
  );
}

export default Tile;