import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img6 from '../../../images/inprogress.png';
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
        <p>Active Plans</p>
        <img src={img6} alt="logo" />
        <p className='admin_dashboard_paragraph'>14</p>
        {isHovered && (
          <Link onClick={scrollToTop} to="/activeplans" className='ton tin ton-tin'>View all active plans</Link>
        )}
      </div>
    </div>
  );
};

export default Admins;
