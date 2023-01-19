import Carousel from './Carousel.js';
import Events from './Events.js';
import News from './News.js';
import Impact from './Impact.js';
import Focus from './Focus.js';
import '../styles/homepage.css';

function Homepage() {
    return (
        <div className='homepage'>
            <Carousel/>
            <div className='home-div' id='focus'>
                <Focus />
            </div>
            <div className='home-div' id='impact'>
                <Impact />
            </div>
            <div className='home-div' id='involved'>
                <h3>GET INVOLVED</h3>
                <button id='donate'>DONATE</button>
                <button id='volunteer'>VOLUNTEER</button>
                <button id='partner'>PARTNER WITH SPIO</button>
            </div>
            <div className='home-div' id='events'>
                <Events />
            </div>
            <div className='home-div' id='news'>
                <News />
            </div>
        </div>
    )
}

export default Homepage;