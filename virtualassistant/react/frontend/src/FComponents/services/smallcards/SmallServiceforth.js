import React from 'react'
import { useState } from 'react';
import "./SmallServicescard.css"
import waitingone from "../../../images/airplane.png"
import { Link } from 'react-router-dom';

const SmallServiceforth = () => {

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
      <p className='webTop'>Surprise Yourself</p>
      <p>Watch your business thrive with our innovative solutions and outstanding results.</p>
      
      {isHovered && (
       <Link className='ton Mlandhover-button' onClick={scrollToTop} to="/signup">Hire VA</Link>
        )}
    </div>
    </div>
  );
}
export default SmallServiceforth