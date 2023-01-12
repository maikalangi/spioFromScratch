import Carousel from './carousel.js';
import './homepage.css';

function Homepage() {
    return (
        <div className='homepage'>
            <Carousel/>
            <div className='focus'>
                <h1>OUR FOCUS</h1>
            </div>
            <div className='impact'>
                <h1>OUR IMPACT</h1>
            </div>
            <div className='involved'>
                <h1>GET INVOLVED</h1>
            </div>
            <div className='events'>
                <h1>EVENTS</h1>
            </div>
            <div className='news'>
                <h1>NEWS</h1>
            </div>
        </div>
    )
}

export default Homepage;