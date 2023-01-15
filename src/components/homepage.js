import Carousel from './carousel.js';
import leftVector from '../leftVector.png';
import centerVector from '../centerVector.png';
import rightVector from '../rightVector.png';
import './homepage.css';

function Homepage() {
    return (
        <div className='homepage'>
            <Carousel/>
            <div className='home-div' id='focus'>
                <h3>OUR FOCUS</h3>
                <div id='focus-div'>
                    <div id='left-div'>
                        <img            
                            className='focusVector'
                            id='leftVector'
                            src={leftVector} 
                            alt="handshake" />
                        <h5>SCHOLARSHIP PROGRAM & EDUCATIONAL RESOURCES</h5>
                        <span>SPIO offers Pacific Islanders financial opportunities to qualifying members and a vast directory of educational resources based on regions.</span>
                    </div>
                    <div id='center-div'>
                        <img 
                            className='focusVector' 
                            id='centerVector'
                            src={centerVector} 
                            alt="bullseye" />
                        <h5>MENTORSHIP PROGRAM</h5>
                        <span>SPIO provides Pacific Islanders a free 30-minute session for help with undergraduate applications.</span>
                    </div>
                    <div id='right-div'>
                        <img 
                            className='focusVector' 
                            id='rightVector'
                            src={rightVector} 
                            alt="network" />
                        <h5>HIGHER EDUCATION NETWORK</h5>
                        <span>SPIO has launched a digital space for scholars and professionals of Pacific descent to make meaningful connections, share educational and career resources, and build a unified global community.</span>
                    </div>
                </div>
            </div>
            <div className='home-div' id='impact'>
                <h3>OUR IMPACT</h3>
            </div>
            <div className='home-div' id='involved'>
                <h3>GET INVOLVED</h3>
            </div>
            <div className='home-div' id='events'>
                <h3>EVENTS</h3>
            </div>
            <div className='home-div' id='news'>
                <h3>NEWS</h3>
            </div>
        </div>
    )
}

export default Homepage;