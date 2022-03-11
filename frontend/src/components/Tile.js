// Tile (search by xx) component on main page

function Tile(props) {
  const {title, type, setType} = props;
  const tileClass = (type == title) ? 'tile tile-selected' : 'tile';
  return (
    <div className={tileClass} onClick={() => setType(title)}>
      {(type == title) ? <strong><p>{title}</p></strong> : <p>{title}</p>}
    </div>
  );
}

export default Tile;