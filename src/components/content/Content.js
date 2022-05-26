import React from 'react';
import './Content.css'
const Content = () => {
    return (
        <div className='content'>


            <h1>We’re different</h1>

            <div className='cardContainer'>
                <div className='card'>
                    <img src={process.env.PUBLIC_URL + '/images/icon-snappy-process.svg'} alt="snappy icon" />

                    <h2>
                        Snappy Process
                    </h2>
                    <p>Our application process can be completed in minutes, not hours. Don’t get
                    stuck filling in tedious forms.</p>
                </div>
                <div className='card'>
                    <img src={process.env.PUBLIC_URL + '/images/icon-affordable-prices.svg'} alt="snappy icon" />

                    <h2>
                        Affordable Prices
                    </h2>
                    <p>We don’t want you worrying about high monthly costs. Our prices may be low,
                    but we still offer the best coverage possible.</p>
                </div>
                <div className='card'>
                    <img src={process.env.PUBLIC_URL + '/images/icon-people-first.svg'} alt="snappy icon" />

                    <h2>
                        People First
                    </h2>
                    <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make
                    sure you’re covered when you need it.</p>
                </div>
            </div>
            <div className='contentBanner'>
                <h1>Find out more<br />about how we work</h1>

                <a href="#" className='boxLink'>How we work</a>


            </div>
        </div>
    );
};

export default Content;