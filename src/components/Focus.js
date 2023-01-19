import '../styles/focus.css';
import leftVector from '../utils/leftVector.png';
import centerVector from '../utils/centerVector.png';
import rightVector from '../utils/rightVector.png';

function Focus() {
  return (
    <div>
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
  )
}

export default Focus