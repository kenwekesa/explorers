import React from 'react'
import { useState } from 'react';
import "./Mlcustomer.css"
import coins from "../../images/digital.png"

const Mldigital = () => {

 const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`Mlandcard ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      >
    <div>
      <p><img src={coins} alt='logo' loading="lazy" className='Mlandimg'/></p>
      <p className='MlandTop'>Digital Marketing Virtual <br></br> 
       Assistant</p>
      {isHovered && (
       <a href="home.html" className='ton Mlandhover-button' onClick={() => alert('Button clicked!')}> Hire VA</a>
        )}
    </div>
    </div>
  );
}

export default Mldigital