import React from 'react'
import "./smallcards.css"
import coins from "../../../images/social.png"
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Social = () => {
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
      className={`pcard ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      >
    <div>
      <p><img src={coins} alt='logo' loading="lazy" className='webimgp'/></p>
      <p className='pwebTop'>Social Media Virtual Assistant</p>
      <p className='ptopWeb'>Feeling overwhelmed by the challenges of social media marketing? Our virtual social media assistants are at your service! Leveraging their expertise and capabilities, they can assist in overseeing your social media profiles, crafting captivating content, and expanding your follower base. By teaming up with us, you can save valuable time and enhance your digital visibility. Connect with us today to discover further details.</p>
      {/* <p>No paying for downtime or slow time. When the clock is on, your VA is working.</p> */}
      {isHovered && (
       <Link className='ton Mlandhover-button' onClick={scrollToTop} to="/signup">Hire VA</Link>
        )}
    </div>
    </div>
  );

}

export default Social