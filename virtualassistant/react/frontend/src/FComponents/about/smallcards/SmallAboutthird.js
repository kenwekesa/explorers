import React from 'react'
import { useState } from 'react';
import "./SmallAboutfirst.css"
import coins from "../../../images/collaborate.png"
import { Link } from 'react-router-dom';

const SmallAboutthird = () => {
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
      <p className='webTopy'>Client Centricity</p>
      <p>Our focus is on understanding and meeting needs of our clients, providing tailored services and unwavering support.</p>
      
      {isHovered && (
       <Link className='ton Mlandhover-button' onClick={scrollToTop} to="/signup">Hire VA</Link>
        )}
    </div>
    </div>
  );
}
export default SmallAboutthird