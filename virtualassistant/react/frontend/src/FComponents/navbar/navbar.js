import React from 'react'
import "./navbar.css"
import { useState, useEffect } from 'react'
import "./mobile.css"
import "./laptop.css"
import "./tablet.css"
import "./desktop.css"
import headset from "../../images/headset.png"
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

  // const scrollToTop = () => {
  //   document.getElementById("scroller").scroll(0,0)
  // }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  return (
    <nav  className="themainnavbar" style={{ backgroundColor: navbarBackground }}>
      <div className="logo">
        <a className='navlogo'><img src={headset} loading="lazy" alt="Logo" />VA</a>
      </div>
      <div  className={`links ${isMobileMenuOpen ? 'open' : ''}`}>
        <a><Link to="/" onClick={scrollToTop} className="navlinkse">Home</Link></a>
        <a><Link to="/services" onClick={scrollToTop} className="navlinkse">Services</Link></a>
        <a><Link to="/prices" onClick={scrollToTop} className="navlinkse">Pricing</Link></a>
        <a><Link to="/about" onClick={scrollToTop} className="navlinkse">About</Link></a>
        <a><Link to="/industries" onClick={scrollToTop} className="navlinkse">Industries</Link></a>
        <a><Link to="/contact" onClick={scrollToTop} className="navlinkse">Contact</Link></a>
        <div className="button">
        <Link to="/login" className="ton" onClick={scrollToTop} >Login</Link>
        </div>
        </div>
       <div className="menu-toggle" onClick={toggleMobileMenu}>
        &#9776;
      </div>
    </nav>
  );
}

export default MainNav