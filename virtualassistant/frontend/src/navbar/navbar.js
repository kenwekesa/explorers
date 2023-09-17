import React from 'react'
import "./navbar.css"
import { useState, useEffect } from 'react'
import "./mobile.css"
import "./laptop.css"
import "./tablet.css"
import "./desktop.css"
import headset from "../images/headset.png"

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

  return (
    <nav className="navbar" style={{ backgroundColor: navbarBackground }}>
      <div className="logo">
        <a href="home.html" className='navlogo'><img src={headset} loading="lazy" alt="Logo" />VA</a>
      </div>
        <div className={`links ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="home.html">Home</a>
        <a href="home.html">Services</a>
        <a href="home.html">Pricing</a>
        <a href="home.html">About</a>
        <a href="home.html">Industries</a>
        <a href="home.html">Contact</a>
        <div className="button">
        <a href="home.html" className="ton">Login</a>
              </div>
        </div>
       <div className="menu-toggle" onClick={toggleMobileMenu}>
        &#9776;
      </div>
    </nav>
  );
}

export default MainNav