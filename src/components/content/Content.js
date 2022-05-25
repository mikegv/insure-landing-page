import React from 'react';
import './Content.css'
const Content = () => {
    return (
        <div className='content'>


            <h1>We’re different</h1>

            <div className='cardContainer'>
                <div className='card'>
                <img src={process.env.PUBLIC_URL + '/images/icon-snappy-process.svg'} alt="snappy icon" />

                <h4>
                    Snappy Process
                </h4>
                Our application process can be completed in minutes, not hours. Don’t get
                stuck filling in tedious forms.
                </div>
                <div className='card'>
                <img src={process.env.PUBLIC_URL + '/images/icon-affordable-prices.svg'} alt="snappy icon" />

                <h4>
                    Affordable Prices
                </h4>
                We don’t want you worrying about high monthly costs. Our prices may be low,
                but we still offer the best coverage possible.
</div>
<div className='card'>
                <img src={process.env.PUBLIC_URL + '/images/icon-people-first.svg'} alt="snappy icon" />

                <h4>
                    People First
                </h4>
                Our plans aren’t full of conditions and clauses to prevent payouts. We make
                sure you’re covered when you need it.
                </div>
            </div>
            <div className='contentBanner'>
                Find out more about how we work

                How we work

            </div>
        </div>
    );
};

export default Content;