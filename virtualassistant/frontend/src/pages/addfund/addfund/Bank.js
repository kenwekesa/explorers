import React, { useState } from 'react';
import CreditCard from "react-credit-card";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const Bank = ({ isOpen, onClose }) =>{

  if (!isOpen) return null;

  return (
    <div className="dialog-background">
      <div className="dialog-box">
        <h2>Add funds to your account</h2>
        <p>This is the content of the dialog box.</p>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Bank