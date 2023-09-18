import React from 'react'
import "./navbar.css"
import { useState, useEffect } from 'react'
import "./mobile.css"
import "./laptop.css"
import "./tablet.css"
import "./desktop.css"
import headset from "../images/headset.png"
import { Link } from 'react-router-dom'

const MainNav = () => {

const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [navbarBackground, setNavbarBackground] = useState('transparent');

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Set the background color based on scroll position
      if (scrollY > 100) {
        setNavbarBackground('#001C30'); // Change to your desired background color
      } else {
        setNavbarBackground('transparent');
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    document.getElementById("scroller").scroll(0,0)
  }

  return (
    <nav className="navbar" style={{ backgroundColor: navbarBackground }}>
      <div className="logo">
        <a className='navlogo'><img src={headset} loading="lazy" alt="Logo" />VA</a>
      </div>
      <div id="scroller" className={`links ${isMobileMenuOpen ? 'open' : ''}`}>
        {/* <ul>
          <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
          <li><Link to="/prices" onClick={scrollToTop}>Services</Link></li>
          <li><Link to="/services" onClick={scrollToTop}>Prices</Link></li>
          <li><Link to="/about" onClick={scrollToTop}>About</Link></li>
          <li><Link to="/industries" onClick={scrollToTop}>Industries</Link></li>
          <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
        </ul> */}
        <a><Link to="/" onClick={scrollToTop}>Home</Link></a>
        <a><Link to="/prices" onClick={scrollToTop}>Services</Link></a>
        <a><Link to="/services" onClick={scrollToTop}>Prices</Link></a>
        <a><Link to="/about" onClick={scrollToTop}>About</Link></a>
        <a><Link to="/industries" onClick={scrollToTop}>Industries</Link></a>
        <a><Link to="/contact" onClick={scrollToTop}>Contact</Link></a>
        <div className="button">
        <a className="ton">Login</a>
        </div>
        </div>
       <div className="menu-toggle" onClick={toggleMobileMenu}>
        &#9776;
      </div>
    </nav>
  );
}

export default MainNav