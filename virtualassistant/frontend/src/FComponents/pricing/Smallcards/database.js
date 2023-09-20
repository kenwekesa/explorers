import React from 'react'
import "./smallcards.css"
import { useState } from 'react';
import coins from "../../../images/database.png"
import { Link } from 'react-router-dom';

const Database = () => {
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
      className={`pcard ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      >
    <div>
      <p><img src={coins} alt='logo' loading="lazy" className='webimgp'/></p>
      <p className='pwebTop'>Database Management Services</p>
      <p className='ptopWeb'>Our committed team is focused on addressing your customer queries promptly and with a high level of professionalism. Our round-the-clock availability and extensive knowledge across diverse sectors make us a reliable choice for safeguarding your positive image in the market. We take pride in ensuring your customers receive the best support, anytime they need it</p>
      {/* <p>No paying for downtime or slow time. When the clock is on, your VA is working.</p> */}
      {isHovered && (
       <Link className='ton Mlandhover-button' onClick={scrollToTop} to="/signup">Hire VA</Link>
        )}
    </div>
    </div>
  );

}

export default Database