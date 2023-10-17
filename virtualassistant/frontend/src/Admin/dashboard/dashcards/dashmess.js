import React, { useState } from 'react';
import img6 from '../../../images/mymessages.png';
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
        <p>New Messages</p>
        <img src={img6} alt="logo" />
        <p>11</p>
        {isHovered && (
          <button className="ton tin">View all new messages</button>
        )}
      </div>
    </div>
  );
};

export default Admins;
