import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img6 from '../../../images/checkmark.png';
import './dashcards.css';

const Dascomplete = () => {
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
        <p>Completed orders</p>
        <img src={img6} alt="logo" />
        <p className='dashboard_paragraph'>14</p>
        {isHovered && (
          <Link onClick={scrollToTop} to="/mycompletedorders" className='ton tin ton-tin'>View Completed orders</Link>
        )}
      </div>
    </div>
  );
};

export default Dascomplete;
