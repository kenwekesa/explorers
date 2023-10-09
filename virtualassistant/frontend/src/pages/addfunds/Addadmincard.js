import React, { useState } from 'react';
import "./Addadmincard.css"

const Addadmincard = ({ isOpen, onClose }) => {

  if (!isOpen) return null;

  return (
    <div className="dialog-background">
      <div className="dialog-box">
        <h2>Dialog Box Content</h2>
        <p>This is the content of the dialog box.</p>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Addadmincard