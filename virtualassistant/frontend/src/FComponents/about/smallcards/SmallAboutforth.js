import React from 'react'
import { useState } from 'react';
import "./SmallAboutfirst.css"
import coins from "../../../images/elavator.png"
import { Link } from 'react-router-dom';

const SmallAboutforth = () => {

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
      className={`fiycard ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      >
    <div>
      <p><img src={coins} alt='logo' loading="lazy" className='webimgy'/></p>
      <p className='webTopy'>Resourcefulness</p>
      <p>VA prides itself on its ability to adapt and find creative solutions to meet the demands of our clients in the digital landscape.</p>
      
      {isHovered && (
       <Link className='ton Mlandhover-button' onClick={scrollToTop} to="/signup">Hire VA</Link>
        )}
    </div>
    </div>
  );
}

export default SmallAboutforth