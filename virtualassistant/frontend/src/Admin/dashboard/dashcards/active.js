import React, { useState } from 'react';
import img6 from '../../../images/inprogress.png';
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
        <p>Active Plans</p>
        <img src={img6} alt="logo" />
        <p>14</p>
        {isHovered && (
          <button className="ton tin">View all active plans</button>
        )}
      </div>
    </div>
  );
};

export default Admins;
