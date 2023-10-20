import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img6 from '../../../images/pending.png';
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
        <p>Pending Plans</p>
        <img src={img6} alt="logo" />
        <p className='admin_dashboard_paragraph'>30</p>
        {isHovered && (
          <Link onClick={scrollToTop} to="/pendingplans" className='ton tin ton-tin'>View all pending plans</Link>
        )}
      </div>
    </div>
  );
};

export default Admins;
