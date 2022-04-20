import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            Hero
            
            Humanizing your insurance.

Get your life insurance coverage easier and faster. We blend our expertise 
and technology to help you find the plan that’s right for you. Ensure you 
and your loved ones are protected.

View plans
 <img src={process.env.PUBLIC_URL + '/images/image-intro-desktop.jpg'} alt='intro desktop' />

Hero
        </div>
    );
};

export default Hero;