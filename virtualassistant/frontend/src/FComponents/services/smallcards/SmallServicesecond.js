import React from 'react'
import { useState } from 'react';
import "./SmallServicescard.css"
import timeone from "../../../images/timeone.png"
import { Link } from 'react-router-dom';

const SmallServicesecond = () => {
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
      className={`ficard ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      >
    <div className='websori'>
      <p><img src={timeone} alt='logo' loading="lazy" className='webimg'/></p>
      <p className='webTop'>Spend your time wisely</p>
      <p>Let us handle tasks, freeing you to focus on what truly matters.</p>
      
      {isHovered && (
       <Link className='ton Mlandhover-button' onClick={scrollToTop} to="/signup">Hire VA</Link>
        )}
    </div>
    </div>
  );
}

export default SmallServicesecond