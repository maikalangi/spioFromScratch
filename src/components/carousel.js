import '../styles/carousel.css';

function Carousel() {
    return (
        <ul className='carousel'>
            <li id='slide-1'>
                <p>We are breaking Pacific Islander stereotypes and sharing our stories.</p>
            </li>
            <li id='slide-2'>
                <p>We are building collective Pacific power, beyond country lines.</p>
            </li>
            <li id='slide-3'>
                <p>We are democratizing Pacific Islander access to educational and career resources.</p>
            </li>
            <li id='slide-4'>
                <p>We are amplifying Pacific Islander presence in higher education and professional fields, globally.</p>
            </li>
        </ul>
    );
}

export default Carousel;