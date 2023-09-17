import React from 'react'
import { useState } from 'react';
import "./SmallServicescard.css"
import waitingone from "../../images/airplane.png"

const SmallServiceforth = () => {

 const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
      <p>No paying for downtime or slow time. When the clock is on, your VA is working.</p>
      
      {isHovered && (
       <a href="home.html" className='ton fihover-button' onClick={() => alert('Button clicked!')}> Hire VA</a>
        )}
    </div>
    </div>
  );
}
export default SmallServiceforth