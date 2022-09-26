import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widget from './Widget';

function App() {
  return (
    <>
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>

    </>
  )
}

export default App;
