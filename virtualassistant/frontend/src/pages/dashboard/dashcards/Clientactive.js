import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img6 from '../../../images/inprogress.png';
import './clientdashcards.css';

const ClientActive = () => {
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
        className={`client_dashcard ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <p>Active plans</p>
        <img src={img6} alt="logo" />
        <p className='client_dashboard_paragraph'>14</p>
        {isHovered && (
          <Link onClick={scrollToTop} to="/active_plans" className='ton tin ton-tin'>View active plans</Link>
        )}
      </div>
    </div>
  );
};

export default ClientActive;
