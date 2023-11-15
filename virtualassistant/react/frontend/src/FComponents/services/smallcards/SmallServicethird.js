import React from 'react'
import { useState } from 'react';
import "./SmallServicescard.css"
import waitingone from "../../../images/waitingone.png"
import { Link } from 'react-router-dom';

const SmallServicethird = () => {
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
      <p><img src={waitingone} alt='logo' loading="lazy" className='webimg'/></p>
      <p className='webTop'>Have some rest</p>
      <p>Relax knowing our dedicated team is here to support you 24/7</p>
      
      {isHovered && (
       <Link className='ton Mlandhover-button' onClick={scrollToTop} to="/signup">Hire VA</Link>
        )}
    </div>
    </div>
  );
}

export default SmallServicethird