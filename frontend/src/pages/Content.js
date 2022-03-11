import Main from './Main'
import Landing from './Landing'
import SignIn from './SignIn'
import './Main.css';

function Content() {
  const currentPage = <Main />;
  // const currentPage = <Landing />;
  // const currentPage = <SignIn />;
  return (
    <div className="Content">
    {currentPage}
    </div>
  );
}
  
export default Content;
  