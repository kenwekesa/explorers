import React from 'react'
import "./footer.css"
import headset from "../../images/headsettwo.png"
import instagram from "../../images/instagram.png"
import facebook from "../../images/facebook.png"
import twitter from "../../images/twitter.png"
import { Link } from 'react-router-dom'

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  return (
    <div className='footerbody'>
      <div className='footerfirst'>
        <a href='home.html' className='footerlogo'><img src={headset} alt="logo" loading="lazy"></img> VA </a>
        {/* <a onClick={scrollToTop} className='footerbtn'> */}
         <Link className='footerbtn footernavlinkbtn' onClick={scrollToTop} to="/signup">Get Started</Link> 
        {/* </a> */}
      </div>
      <hr className='fthr' />
      <div className='footersecond'>
        <div className='footersecond-mobile'>
          <p>Accomplish with the best</p>
          <p>Part time</p>
           <p> full time</p>
            <p>contractor</p>
            <p>freelance </p>
          <p>Virtual Assistants</p>
          <Link className='footerbtn footernavlinkbtn' onClick={scrollToTop} to="/signup">Hire VA</Link>
        </div>
        <div>
          <p>Quick Links</p>
          <p><Link className='fotterlinks' to="/" onClick={scrollToTop}>Home</Link></p>
          <p><Link className='fotterlinks' to="/services" onClick={scrollToTop}>Services</Link></p>
          <p><Link className='fotterlinks' to="/prices" onClick={scrollToTop}>Pricing</Link></p>
          <p><Link className='fotterlinks' to="/about" onClick={scrollToTop}>About</Link></p>
          <p><Link className='fotterlinks' to="/industries" onClick={scrollToTop}>Industries</Link></p>
          <p><Link className='fotterlinks' to="/contact" onClick={scrollToTop}>Contact</Link></p>
          {/* <p>Home</p>
          <p>Services</p>
          <p>Pricing</p>
          <p>About</p>
          <p>Industries</p>
          <p>Contact</p> */}
        </div>
        <div>
          <p>Our Services</p>
          <p>Virtual Assistants</p>
          <p>Web Development</p>
          <p>Digital Marketing</p>
          <p>Database Management</p>
          <p><Link className='fotterlinks' to="/careers" onClick={scrollToTop}>Careers</Link></p>
        </div>
      </div>

      <div className='footerthird'>
        <div>
          <p>&copy;2023 VA | All Rights Reserved</p>
        </div>
        <div>
          <a href="home.html"><img src={facebook} loading="lazy" alt="logo" /></a>
          <a href="home.html"><img src={instagram} loading="lazy" alt="logo" /></a>
          <a href="home.html"><img src={ twitter } loading="lazy" alt="logo"/></a>
        </div>
      </div>
    </div>

    
  )
}

export default Footer