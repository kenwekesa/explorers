import React from 'react'
import { useState } from 'react';
import "./SmallAboutfirst.css"
import coins from "../../../images/peopleworking.png"
import { Link } from 'react-router-dom';

const SmallAboutfirst = () => {
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
      <p className='webTopy'>Excellence</p>
      <p>VA is dedicated to achieving the highest standards in all our services, ensuring exceptional quality and results for our clients.</p>
      
      {isHovered && (
       <Link className='ton Mlandhover-button' onClick={scrollToTop} to="/signup">Hire VA</Link>
        )}
    </div>
    </div>
  );
}

export default SmallAboutfirst