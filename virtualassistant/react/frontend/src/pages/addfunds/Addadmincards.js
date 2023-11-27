import React, { useState } from 'react';
import "./Addadmincard.css"

const Addadmincards = ({ isOpen, onClose, title, content }) => {

  if (!isOpen) return null;

  return (
    <div className="dialog-background">
      <div className="dialog-box">
        <h2>{title}</h2>
        <p>{content}</p>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Addadmincards