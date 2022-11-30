import spio from './spio.png';
import search from './search.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={spio} alt="SPIO logo" />
        South Pacific Islander Organization
        <input type="search" className='search'/>
        <button className='material-symbols-outlined'><img src={search} alt="search" /></button>
        <button className='donate'>DONATE</button>
      </header>
    </div>
  );
}

export default App;
