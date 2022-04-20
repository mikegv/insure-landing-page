import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='heroContent'>
                <div className='heroLeft'>
                    <hr />
                    <p>Humanizing <br /> your insurance.</p>

                    Get your life insurance coverage easier and faster. We blend our expertise
                    and technology to help you find the plan that’s right for you. Ensure you
                    and your loved ones are protected.

                    View plans
                </div>
                <div className='heroRight'>
                    <img src={process.env.PUBLIC_URL + '/images/image-intro-desktop.jpg'} alt='intro desktop' />

                    Hero
                </div>
            </div>
        </div>
    );
};

export default Hero;