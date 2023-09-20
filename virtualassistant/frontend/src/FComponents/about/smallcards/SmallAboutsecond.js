import React from 'react'
import { useState } from 'react';
import "./SmallAboutfirst.css"
import coins from "../../../images/todolist.png"
import { Link } from 'react-router-dom';

const SmallAboutsecond = () => {
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
      <p className='webTopy'>Efficiency</p>
      <p>At VA, we optimize our processes to deliver prompt and effective solutions, maximizing productivity for our clients.</p>
      
      {isHovered && (
       <Link className='ton Mlandhover-button' onClick={scrollToTop} to="/signup">Hire VA</Link>
        )}
    </div>
    </div>
  );
}

export default SmallAboutsecond