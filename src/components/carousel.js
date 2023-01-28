import '../styles/carousel.css';
import slide1 from '../utils/slide1.png';
import slide2 from '../utils/slide2.png';
import slide3 from '../utils/slide3.png';
import slide4 from '../utils/slide4.png';

function Carousel() {
    return (
        <ul className='carousel'>
            <li className='slides' id='slide-1'>
                <div>
                    <p>We are breaking Pacific Islander stereotypes and sharing our stories.</p>
                    <p>Learn about Fijian entrepreneur with M.A. in Gerontology, Ana Jones, and the launching of her app that connects elders with caregivers.</p>
                </div>
                <img src={slide1} alt="" />
            </li>
            <li className='slides' id='slide-2'>
                <img src={slide2} alt="" />
                <div>    
                    <p>We are building collective Pacific power, beyond country lines.</p>
                    <p>Read about Native Hawaiian professional MMA fighter, Ilima-Lei Macfarlane, and her thoughts on the importance of community away from home, higher education, and the collective support for larger Indigenous communities.</p>
                </div>
            </li>
            <li className='slides' id='slide-3'>
                <p>We are democratizing Pacific Islander access to educational and career resources.</p>
                <img src={slide3} alt="" />
                <p>Congratulate one of SPIO’s 2021 Honorary Scholarship receipients, Vinessa Dueñas. Click the link to learn more about Vinessa’s efforts in serving her community.</p>
            </li>
            <li className='slides' id='slide-4'>
                <img src={slide4} alt="" />
                <div>                    
                    <p>We are amplifying Pacific Islander presence in higher education and professional fields, globally.</p>
                    <p>Dive into Finausina Tovo’s discussion about her academic journey, the importance of giving Pacific Islanders a voice in higher education, and the Mana program’s effect on Pacific scholars. </p>
                </div>
            </li>
        </ul>
    );
}

export default Carousel;