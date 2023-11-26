import React from 'react'
import "./Creditcard.css"
import visa from "../../../images/visa.png"
import wise from "../../../images/wisee.png"
import paypal from "../../../images/paypal.png"
import mpesa from "../../../images/mpesa.png"
import { useState } from 'react'
import Payoneer from './Payoneer'
import skrill from '../../../images/skrill.png'
import Wise from './Wise'
import Binance from './Binance'
import Skrill from './Skrill'

const Creditcard = () => {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPayPalDialogOpen, setPayPalIsDialogOpen] = useState(false);
  const [isBankDialogOpen, setBankIsDialogOpen] = useState(false);
  const [isMpesaDialogOpen, setMpesaIsDialogOpen] = useState(false);


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

  const openMpesaDialog = () => {
    setMpesaIsDialogOpen(true);
  };

  const closeMpesaDialog = () => {
    setMpesaIsDialogOpen(false);
  };

  return (
      <div className='creditcard'>
          <p className='paragraph-payment-options'>Other Payment Options</p>
          <div className='creditcard-options'>
          <div className='credicard-active-option'>
              <p className='paragraph-option-titles'>Method</p>
              <p className='paragraph-option-titles'>Status</p>
          </div>
            <hr className='credit-card-hr'></hr>
           <div className='credicard-active-options'>
              <a><img src={paypal} loading="eager" alt="paypal" /><span>Payoneer</span></a>
          <p className='ton tan' onClick={openDialog}>Active</p>
          <Payoneer
              isOpen={isDialogOpen}
              onClose={closeDialog} 
              />
          </div>
            <hr className='credit-card-hr'></hr>
           <div className='credicard-active-options'>
              <a><img src={ wise} loading="eager" alt="wise" /><span>Wise</span></a>
          <p className='ton tan' onClick={openPayPalDialog}>Active</p>
           <Wise
               isOpen={isPayPalDialogOpen}
              onClose={closePayPalDialog} 
              />
              </div>
            <hr className='credit-card-hr'></hr>
          <div className='credicard-active-options'>
          <a><img src={ mpesa } loading="eager" alt="wise" /> <span>Binance</span></a>
          <p className='ton tan' onClick={openMpesaDialog}>Active</p>
          <Binance
              isOpen={isMpesaDialogOpen}
              onClose={closeMpesaDialog} 
              />
        </div>
        <hr className='credit-card-hr'></hr>
           <div className='credicard-active-options'>
          <a><img src={ skrill } loading="eager" alt="wise" /> <span>Skrill</span></a>
          <p className='ton tan' onClick={openBankDialog}>Active</p>
          <Skrill
              isOpen={isBankDialogOpen}
              onClose={closeBankDialog} 
              />
          </div>
          </div>
      </div>
  )
}

export default Creditcard