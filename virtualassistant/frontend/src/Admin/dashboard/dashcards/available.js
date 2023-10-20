import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img6 from '../../../images/cashinhand.png';
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
        <p>Available Funds</p>
        <img src={img6} alt="logo" />
        <p className='admin_dashboard_paragraph'>$1000</p>
        {isHovered && (
          <Link onClick={scrollToTop} to="/funds" className='ton tin ton-tin'>View all funds</Link>
        )}
      </div>
    </div>
  );
};

export default Admins;
