import React, { useState } from 'react';
import img6 from '../../../images/admin.png';
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
        <p>Total administrators</p>
        <img src={img6} alt="logo" />
        <p>10</p>
        {isHovered && (
          <button className="ton tin">View all administrators</button>
        )}
      </div>
    </div>
  );
};

export default Admins;
