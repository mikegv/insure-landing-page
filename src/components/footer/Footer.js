import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerTopSection'>
            <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt='logo'  />
            <div className='iconSection'>
            <img src={process.env.PUBLIC_URL + '/images/icon-facebook.svg'} alt='logo'  />
            <img src={process.env.PUBLIC_URL + '/images/icon-twitter.svg'} alt='logo'  />
            <img src={process.env.PUBLIC_URL + '/images/icon-pinterest.svg'} alt='logo'  />
            <img src={process.env.PUBLIC_URL + '/images/icon-instagram.svg'} alt='logo'  />
            </div>
            </div>
            <hr />
            <div className='footerLinks'>
 <div className='footerLinkSection'>
  <p className='linkHeading'>Our company</p>

<a href='#' className='footerLink'>How we work</a>
<a href='#' className='footerLink'>Why Insure?</a>
<a href='#' className='footerLink'>View plans</a>
<a href='#' className='footerLink'>Reviews</a>
</div>
<div className='footerLinkSection'>

  <p className='linkHeading'>Help me</p>


<a href='#' className='footerLink'>FAQ</a>


<a href='#' className='footerLink'>Terms of use</a>

<a href='#' className='footerLink'>Privacy policy</a>
<a href='#' className='footerLink'>Cookies</a>


</div>
<div className='footerLinkSection'>
<p className='linkHeading'>Contact</p>

<a href='#' className='footerLink'>Sales</a>


<a href='#' className='footerLink'>Support</a>


<a href='#' className='footerLink'>Live chat</a>

</div>
<div className='footerLinkSection'>
<p className='linkHeading'>Others</p>


<a href='#' className='footerLink'>Careers</a>


<a href='#' className='footerLink'>Press</a>

<a href='#' className='footerLink'>Licenses</a>

</div>
</div>
        </div>
    );
};

export default Footer;