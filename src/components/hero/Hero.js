import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={process.env.PUBLIC_URL + '/images/bg-pattern-intro-right-desktop.svg'} alt='intro desktop bg' className='bgRightPattern' />
            <img src={process.env.PUBLIC_URL + '/images/bg-pattern-intro-left-desktop.svg'} alt='intro desktop bg' className='bgLeftPattern' />

            <div className='heroContent'>
                <div className='heroLeft'>
                    <hr className='heroTopHr'/>
                    <p className='heroTitle'>Humanizing <br /> your insurance.</p>

                    <p>Get your life insurance coverage easier and faster. We blend our expertise
                        and technology to help you find the plan that’s right for you. Ensure you
                        and your loved ones are protected.
                    </p>
                    <br />
                    <a href="#" className='heroBoxLink'>View plans</a>

                </div>
                <div className='heroRight'>
                    <img src={process.env.PUBLIC_URL + '/images/image-intro-desktop.jpg'} alt='intro desktop' />
                </div>
                <hr className='bottomHeroHr'/>

            </div>

        </div>
    );
};

export default Hero;