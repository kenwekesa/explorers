import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img6 from '../../../images/mymessages.png';
import './clientdashcards.css';

const Clientmessage = () => {
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
        <p>Messages</p>
        <img src={img6} alt="logo" />
        <p className='client_dashboard_paragraph'>12</p>
        {isHovered && (
          <Link onClick={scrollToTop} to="/messages" className='ton tin ton-tin'>View new messages</Link>
        )}
      </div>
    </div>
  );
};

export default Clientmessage;
