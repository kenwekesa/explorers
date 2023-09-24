import React from 'react'
import "./industriescardsd.css"
import { useState } from 'react';
import coins from "../../../images/property.png"
import { Link } from 'react-router-dom';

const Industriestcard = () => {
 const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  return (
    <div
      className={`icard ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      >
    <div>
      <p><img src={coins} alt='logo' loading="lazy" className='webimgi'/></p>
      <p className='iwebTop'>Real Estate</p>
      {/* <p>No paying for downtime or slow time. When the clock is on, your VA is working.</p> */}
      {isHovered && (
       <Link className='ton Mlandhover-button' onClick={scrollToTop} to="/signup">Hire VA</Link>
        )}
    </div>
    </div>
  );
}

export default Industriestcard