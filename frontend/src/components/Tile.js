// Tile (search by xx) component on main page

function Tile(props) {
  const {title, term, setTerm} = props;
  
  return (
    <div className="Tile" onClick={() => setTerm(title)}>
      {(term == title) ? <strong><p>{title}</p></strong> : <p>{title}</p>}
    </div>
  );
}

export default Tile;