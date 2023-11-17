import React from 'react'
import { useState } from 'react';
import "./Mlcustomer.css"
import coins from "../../../images/content.png"
import { Link } from 'react-router-dom';

const Mlcontent = () => {
 

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
      className={`Mlandcard ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      >
    <div>
      <p><img src={coins} alt='logo' loading="lazy" className='Mlandimg'/></p>
      <p className='MlandTop'>Content Creation <br></br>
       Services</p>
      {isHovered && (
       <Link className='ton Mlandhover-button' onClick={scrollToTop} to="/signup">Hire VA</Link>
      )}
    </div>
    </div>
  );
}

export default Mlcontent