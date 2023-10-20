import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img6 from '../../../images/newplans.png';
import './clientdashcards.css';

const Clientpending = () => {
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
        <p>Pending plans</p>
        <img src={img6} alt="logo" />
        <p className='client_dashboard_paragraph'>4</p>
        {isHovered && (
          <Link onClick={scrollToTop} to="/pending_plans" className='ton tin ton-tin'>View pending plans</Link>
        )}
      </div>
    </div>
  );
};

export default Clientpending;
