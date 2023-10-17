import React, { useState } from 'react';
import img6 from '../../../images/cashinhand.png';
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
        <p>Available Funds</p>
        <img src={img6} alt="logo" />
        <p>$1000</p>
        {isHovered && (
          <button className="ton tin">View all funds</button>
        )}
      </div>
    </div>
  );
};

export default Admins;
