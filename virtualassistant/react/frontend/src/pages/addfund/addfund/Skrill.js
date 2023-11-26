import React, { useState } from 'react';
import Axios from 'axios';
import { db } from '../../../firebase/firebase';
import "./Wise.css"
import { addDoc, collection } from 'firebase/firestore';

const Skrill = ({ isOpen, onClose }) => {

    const [isMpesaDialogOpen, setMpesaIsDialogOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="dialog-background">
      <div className="dialog-box dialog-box-elevation">
        <h3>Add funds<span>using skrill!</span></h3>
        <hr></hr>
        <div>
        <p>Payment details</p>
        <p>Email: <span>vapay@gmail.com</span></p>          
        </div>
        <p>Share invoice with support for your account to be credited!</p>  
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Skrill