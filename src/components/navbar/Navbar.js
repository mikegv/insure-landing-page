import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className='nav'>
                <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt='insure logo' />
                <ul>
                    <li><a href="#">HOW WE WORK</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">ACCOUNT</a></li>
                    <li><a href="#" className='boxLink'>VIEW PLANS</a></li>
                </ul>

            </div>
        );
    }
}

export default Navbar;