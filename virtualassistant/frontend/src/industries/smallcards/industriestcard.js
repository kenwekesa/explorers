import React from 'react'
import "./industriescardsd.css"
import { useState } from 'react';
import coins from "../../images/property.png"

const Industriestcard = () => {
 const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`icard ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      >
    <div>
      <p><img src={coins} alt='logo' loading="lazy" className='webimgi'/></p>
      <p className='iwebTop'>Real Estate</p>
      {/* <p>No paying for downtime or slow time. When the clock is on, your VA is working.</p> */}
      {isHovered && (
       <a href="home.html" className='ton fihover-button' onClick={() => alert('Button clicked!')}> Hire VA</a>
        )}
    </div>
    </div>
  );
}

export default Industriestcard