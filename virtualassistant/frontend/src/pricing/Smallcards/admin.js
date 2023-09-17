import React from 'react'
import "./smallcards.css"
import { useState } from 'react';
import coins from "../../images/Admin Settings Male.png"


const Admin = () => {
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
      <p className='pwebTop'>Virtual Admin Assistant</p>
      <p className='ptopWeb'>Seeking a virtual administrative assistant to lighten your workload? Search no more, as our seasoned team of assistants is here to assist you. Whether it's scheduling appointments, email management, data entry, or research tasks, we've got you covered. Reach out to us today to explore how we can optimize your processes and enhance your overall productivity.</p>
      {/* <p>No paying for downtime or slow time. When the clock is on, your VA is working.</p> */}
      {isHovered && (
       <a href="home.html" className='ton fihover-button' onClick={() => alert('Button clicked!')}> Hire VA</a>
        )}
    </div>
    </div>
  );

}

export default Admin