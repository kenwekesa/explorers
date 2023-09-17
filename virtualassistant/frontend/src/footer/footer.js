import React from 'react'
import "./footer.css"
import headset from "../images/headsettwo.png"
import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"

function Footer() {
  return (
    <div className='footerbody'>
      <div className='footerfirst'>
        <a href='home.html' className='footerlogo'><img src={headset} alt="logo" loading="lazy"></img> VA </a>
        <a href="home.html" className='footerbtn'>
          Get Started
        </a>
      </div>
      <hr className='fthr' />
      <div className='footersecond'>
        <div>
          <p>Accomplish with the best</p>
          <p>Part time</p>
           <p> full time</p>
            <p>contractor</p>
            <p>freelance </p>
          <p>Virtual Assistants</p>
          <a href="home.html" className='footerbtn'>
          Hire VA
         </a>
        </div>
        <div>
          <p>Quick Links</p>
          <p>Home</p>
          <p>Services</p>
          <p>Pricing</p>
          <p>About</p>
          <p>Industries</p>
          <p>Contact</p>
        </div>
        <div>
          <p>Our Services</p>
          <p>Virtual Assistants</p>
          <p>Web Development</p>
          <p>Digital Marketing</p>
          <p>Database Management</p>
          <p>Careers</p>
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