import logo from './logo.svg';
import './App.css';
import HeaderNav from './components/HeaderNav'
import FooterNav from './components/FooterNav'
import Main from './pages/Main'

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Main />
      <FooterNav />
    </div>
  );
}

export default App;
