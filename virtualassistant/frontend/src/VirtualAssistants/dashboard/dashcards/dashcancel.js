import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img6 from '../../../images/cancel.png';
import './dashcards.css';

const Dashcancel = () => {
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
        <p>Canceled orders</p>
        <img src={img6} alt="logo" />
        <p className='dashboard_paragraph'>14</p>
        {isHovered && (
          <Link onClick={scrollToTop} to="/mycanceledorders" className='ton tin ton-tin'>View Canceled orders</Link>
        )}
      </div>
    </div>
  );
};

export default Dashcancel;
