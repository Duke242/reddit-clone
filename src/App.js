import Header from './Header.js';
import './App.css';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';

function App() {
  return (
    <>
      <div className="app">
        <Header />
      </div>
      <div className="main-content">
        <Sidebar />
        <Feed />
      </div>
    </>
  );
}

export default App;
