import React from 'react'
import "./smallcards.css"
import { useState } from 'react';
import coins from "../../images/digital.png"


const Digital = () => {
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
      <p className='pwebTop'>Digital Marketing Virtual Assistant</p>
      <p className='ptopWeb'>Seeking to amplify your digital marketing endeavors? Our virtual marketing assistants are at your service! Whether it's overseeing social media profiles and email campaigns, conducting market research, or analyzing data, our adept assistants possess the knowledge and skills to foster your business expansion. Connect with us today to explore the details of our virtual assistant service for digital marketing.</p>
      {/* <p>No paying for downtime or slow time. When the clock is on, your VA is working.</p> */}
      {isHovered && (
       <a href="home.html" className='ton fihover-button' onClick={() => alert('Button clicked!')}> Hire VA</a>
        )}
    </div>
    </div>
  );

}

export default Digital