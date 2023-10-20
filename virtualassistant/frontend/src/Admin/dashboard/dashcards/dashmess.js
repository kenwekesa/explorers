import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img6 from '../../../images/mymessages.png';
import './dashcards.css';

const Admins = () => {
  const [isHovered, setHovered] = useState(false);

  const toggleHover = () => {
    setHovered(!isHovered);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth', // Add smooth scrolling behavior
    });
  };
  return (
    <div>
      <div
        className={`admin_dashcard ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <p>New Messages</p>
        <img src={img6} alt="logo" />
        <p className='admin_dashboard_paragraph'>11</p>
        {isHovered && (
          <Link onClick={scrollToTop} to="/messages" className='ton tin ton-tin'>View all new messages</Link>
        )}
      </div>
    </div>
  );
};

export default Admins;
