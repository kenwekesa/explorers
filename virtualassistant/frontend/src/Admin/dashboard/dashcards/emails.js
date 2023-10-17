import React, { useState } from 'react';
import img6 from '../../../images/emails.png';
import './dashcards.css';

const Admins = () => {
  const [isHovered, setHovered] = useState(false);

  const toggleHover = () => {
    setHovered(!isHovered);
  };

  return (
    <div>
      <div
        className={`dashcard ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <p>New emails</p>
        <img src={img6} alt="logo" />
        <p>20</p>
        {isHovered && (
          <button className="ton tin">View all new emails</button>
        )}
      </div>
    </div>
  );
};

export default Admins;
