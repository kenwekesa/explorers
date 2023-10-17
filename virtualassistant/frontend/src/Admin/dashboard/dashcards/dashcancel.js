import React, { useState } from 'react';
import img6 from '../../../images/pending.png';
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
        <p>Pending Plans</p>
        <img src={img6} alt="logo" />
        <p>30</p>
        {isHovered && (
          <button className="ton tin">View all pending plans</button>
        )}
      </div>
    </div>
  );
};

export default Admins;
