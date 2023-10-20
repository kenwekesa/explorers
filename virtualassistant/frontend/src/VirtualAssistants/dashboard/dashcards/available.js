import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img6 from '../../../images/cashinhand.png';
import './dashcards.css';

const Available = () => {
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
        className={`dashcard ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <p>Available funds</p>
        <img src={img6} alt="logo" />
        <p className='dashboard_paragraph'>14</p>
        {isHovered && (
          <Link onClick={scrollToTop} to="/myfunds" className='ton tin ton-tin'>View funds</Link>
        )}
      </div>
    </div>
  );
};

export default Available;
