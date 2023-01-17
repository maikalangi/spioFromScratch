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
                        <p>SPIO offers Pacific Islanders financial opportunities to qualifying members and a vast directory of educational resources based on regions.</p>
                    </div>
                    <div id='center-div'>
                        <img 
                            className='focusVector' 
                            id='centerVector'
                            src={centerVector} 
                            alt="bullseye" />
                        <h5>MENTORSHIP PROGRAM</h5>
                        <p>SPIO provides Pacific Islanders a free 30-minute session for help with undergraduate applications.</p>
                    </div>
                    <div id='right-div'>
                        <img 
                            className='focusVector' 
                            id='rightVector'
                            src={rightVector} 
                            alt="network" />
                        <h5>HIGHER EDUCATION NETWORK</h5>
                        <p>SPIO has launched a digital space for scholars and professionals of Pacific descent to make meaningful connections, share educational and career resources, and build a unified global community.</p>
                    </div>
                </div>
            </div>
            <div className='home-div' id='impact'>
                <div id='impact-div'>
                    <h3>OUR IMPACT</h3>
                    <p>
                    South Pacific Islander Organization (SPIO) is a 100% volunteer-led 501(C)3 nonprofit that provides free digital educational resources for Polynesians, Micronesians and Melanesians around the world to pursue higher education.
                    </p>
                    <table>
                        <tr>
                            <td>
                                <h3>25</h3>
                                <span>SCHOLARSHIPS DISBURSED</span>
                            </td>
                            <td>
                                <h3>$74,000</h3>
                                <span>IN TOTAL SCHOLARSHIPS DISBURSED</span>
                            </td>
                            <td>
                                <h3>120+</h3>
                                <span>VOLUNTEERS</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>2,500+</h3>
                                <span>VOLUNTEER HOURS - NON ADVISORS/BOARD MEMBERS (AVG. 20 HOURS/VOLUNTEER)</span>
                            </td>
                            <td>
                                <h3>10,000+</h3>
                                <span>VOLUNTEER HOURS (FOUNDING TEAM)</span>
                            </td>
                            <td>
                                <h3>350+</h3>
                                <span>SPIO NETWORK MEMBERS</span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className='home-div' id='involved'>
                <h3>GET INVOLVED</h3>
                <button id='donate'>DONATE</button>
                <button id='volunteer'>VOLUNTEER</button>
                <button id='partner'>PARTNER WITH SPIO</button>
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