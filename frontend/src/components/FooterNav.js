// import './App.css';
// import Main from './pages/Main'

function Footer() {
  return (
    <div className="Footer">
      <span onClick={() => console.log('Home')}>
        Home
      </span>
      <span onClick={() => console.log('Search')}>
        Search
      </span>
      <span onClick={() => console.log('My Lists')}>
        My Lists
      </span>
      <span onClick={() => console.log('Settings')}>
        Settings
      </span>
      <span onClick={() => console.log('Profile')}>
        Profile
      </span>
    </div>
  );
}

export default Footer;