import React from 'react'
import "./smallcards.css"
import { useState } from 'react';
import coins from "../../../images/admin.png"
import { Link } from 'react-router-dom';


const Admin = () => {
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
      <p className='pwebTop'>Virtual Admin Assistant</p>
      <p className='ptopWeb'>Seeking a virtual administrative assistant to lighten your workload? Search no more, as our seasoned team of assistants is here to assist you. Whether it's scheduling appointments, email management, data entry, or research tasks, we've got you covered. Reach out to us today to explore how we can optimize your processes and enhance your overall productivity.</p>
      {/* <p>No paying for downtime or slow time. When the clock is on, your VA is working.</p> */}
      {isHovered && (
       <Link className='ton Mlandhover-button' onClick={scrollToTop} to="/signup">Hire VA</Link>
        )}
    </div>
    </div>
  );

}

export default Admin