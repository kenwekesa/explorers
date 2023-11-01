import React from 'react'
import "./Cardbtn.css"
import { useState } from 'react';
import Googlepay from './Googlepay';
import Paypal from './Paypal';
import Mpesa from './Mpesa';
import Bank from './Bank';

const Cardbtn = () => {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPayPalDialogOpen, setPayPalIsDialogOpen] = useState(false);
  const [isBankDialogOpen, setBankIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };


  const openPayPalDialog = () => {
    setPayPalIsDialogOpen(true);
  };

  const closePayPalDialog = () => {
    setPayPalIsDialogOpen(false);
  };

  const openBankDialog = () => {
    setBankIsDialogOpen(true);
  };

  const closeBankDialog = () => {
    setBankIsDialogOpen(false);
  };

  return (
    <div className='cardbtn'>
      <div>
        <a className='ton tin' onClick={openDialog}>Google Pay</a>
         <Googlepay
              isOpen={isDialogOpen}
              onClose={closeDialog} 
              />
      </div>  
      <div>
        <a className='ton tin' onClick={openPayPalDialog}>Paypal</a>
        <Paypal
              isOpen={isPayPalDialogOpen}
              onClose={closePayPalDialog} 
              />
      </div> 
      <div>
        <a className='ton tin' onClick={openBankDialog}>Credit Card</a>
        <Bank
              isOpen={isBankDialogOpen}
              onClose={closeBankDialog} 
              />
      </div> 
      <div>
        <a className='ton tin' onClick={openBankDialog}>Mpesa</a>
        <Mpesa
              isOpen={isBankDialogOpen}
              onClose={closeBankDialog} 
              />
      </div>
    </div>
  )
}

export default Cardbtn