import logo from './logo.svg';
import './App.css';
import HeaderNav from './components/HeaderNav'
import FooterNav from './components/FooterNav'
import Content from './pages/Content'

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Content />
      <FooterNav />
    </div>
  );
}

export default App;
