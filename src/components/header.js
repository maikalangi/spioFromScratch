import spio from '../spio.png';
import search from '../search.png';
import './header.css';

function Header() {
    return (
      <header className="App-header">
        <div className='logo-header'>
          <img className='logo' src={spio} alt="SPIO" />
          <span className='title'>South Pacific Islander Organization</span>
        </div>
        <input type="search" className='search-bar'/>
        <button className='search-icon'><img src={search} alt="search" /></button>
        <button className='donate-button'>DONATE</button>
      </header>
    );
}

export default Header;