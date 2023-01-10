import spio from '../spio.png';
import search from '../search.png';
import './header.css';
import Nav from './nav';

function Header() {
    return (
      <>
        <header className="header">
          <div className='page-top'>
            <div className='logo-header'>
              <img className='logo' src={spio} alt="SPIO" />
              <span className='title'>South Pacific Islander Organization</span>
            </div>
            <input type="search" className='search-bar' />
            <button className='search-icon'><img src={search} alt="search" /></button>
            <button className='donate-button'>DONATE</button>
          </div>
          <Nav />
        </header>
      </>
    );
}

export default Header;