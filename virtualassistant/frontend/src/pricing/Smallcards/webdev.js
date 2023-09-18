import React from 'react'
import "./smallcards.css"
import { useState } from 'react';
import coins from "../../images/webdev.png"


const Webdev = () => {
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
      <p className='pwebTop'>Web Development Services</p>
      <p className='ptopWeb'>As a premier provider of website development solutions, our commitment lies in delivering tailor-made, top-tier services that empower businesses to realize their online objectives. Our proficient team of developers and designers is poised to collaborate with you in crafting a website that authentically mirrors your brand and actively captivates your intended audience. Initiate your project today by reaching out to us.</p>
      {/* <p>No paying for downtime or slow time. When the clock is on, your VA is working.</p> */}
      {isHovered && (
       <a href="home.html" className='ton fihover-button' onClick={() => alert('Button clicked!')}> Hire VA</a>
        )}
    </div>
    </div>
  );

}

export default Webdev