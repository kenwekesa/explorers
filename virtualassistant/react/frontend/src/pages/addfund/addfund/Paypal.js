import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import "./Creditcard.css";
import Paypalbutton from './Paypalbutton';

const Paypal = ({ isOpen, onClose }) => {
  
  const [pay_amount, setAmount] = useState('');
  const [showPayButton, setShowPayButton] = useState(true);

  const [product, setProduct] = useState({
    description: "Virtual Assistant Services",
    price: pay_amount.toString()
  });

  const handleAmountChange = (event) => {
    const newAmount = parseFloat(event.target.value);
    setAmount(newAmount);
    const updatedProduct = {
      description: "Virtual Assistant Services",
      price: newAmount
    };
    setProduct(updatedProduct);
  };

  const handlePay = () => {
    // Hide "Pay with PayPal" button
    setShowPayButton(false);
  };

  if (!isOpen) return null;
  
  return (
    <div className="dialog-background">
      <div className="dialog-box dialog-box-elevation">
        <h3>Add funds <span>using PayPal!</span></h3>
        <hr></hr>
        <input 
          type="number" 
          className='paypal_input_main' 
          placeholder="Enter amount in $" 
          onChange={handleAmountChange}
          value={pay_amount}
        />
        {showPayButton && (
          <button className='ton tin tin-ton' onClick={handlePay}>Pay with PayPal</button>
        )}
        {!showPayButton && (
          <Paypalbutton pay_amount={pay_amount} product={product} />
        )}
        <button
          className="close-button"
          onClick={() => {
            onClose();
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Paypal;