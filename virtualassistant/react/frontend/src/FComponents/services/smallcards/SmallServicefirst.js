import React from 'react'
import { useState } from 'react';
import "./SmallServicescard.css"
import coins from "../../../images/coins.png"
import { Link } from 'react-router-dom';

const SmallServicefirst = () => {

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
      <p><img src={coins} alt='logo' loading="lazy" className='webimg'/></p>
      <p className='webTop'>Pay for what you need</p>
      <p>With VA, you'll enjoy cost-effective services tailored to your exact requirements.</p>
      
      {isHovered && (
       <Link className='ton Mlandhover-button' onClick={scrollToTop} to="/signup">Hire VA</Link>
        )}
    </div>
    </div>
  );
}

export default SmallServicefirst