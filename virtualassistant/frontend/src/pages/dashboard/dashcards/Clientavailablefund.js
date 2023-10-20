import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img6 from '../../../images/cashinhand.png';
import './clientdashcards.css';

const ClientAvailableFund = () => {
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
        <p>Available funds</p>
        <img src={img6} alt="logo" />
        <p className='client_dashboard_paragraph'>$1003</p>
        {isHovered && (
          <Link onClick={scrollToTop} to="/fund" className='ton tin ton-tin'>View funds</Link>
        )}
      </div>
    </div>
  );
};

export default ClientAvailableFund;
