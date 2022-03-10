// Tile (search by xx) component on main page

function Tile(props) {
  const {title} = props;
  return (
    <div className="Tile" onClick={() => console.log(`Search by ${title}`)}>
      <p>{title}</p>
    </div>
  );
}

export default Tile;