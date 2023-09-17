import React from 'react'
import "./smallcards.css"
import { useState } from 'react';
import coins from "../../images/Technical Support.png"


const Customer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`pcard ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      >
    <div>
      <p><img src={coins} alt='logo' loading="lazy" className='webimgp'/></p>
      <p className='pwebTop'>Customer Virtual Assistant</p>
      <p className='ptopWeb'>Our committed team is focused on addressing your customer queries promptly and with a high level of professionalism. Our round-the-clock availability and extensive knowledge across diverse sectors make us a reliable choice for safeguarding your positive image in the market. We take pride in ensuring your customers receive the best support, anytime they need it</p>
      {/* <p>No paying for downtime or slow time. When the clock is on, your VA is working.</p> */}
      {isHovered && (
       <a href="home.html" className='ton fihover-button' onClick={() => alert('Button clicked!')}> Hire VA</a>
        )}
    </div>
    </div>
  );

}

export default Customer