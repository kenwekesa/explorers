import React from 'react'
import "./Creditcard.css"
import visa from "../../../images/visa.png"
import wise from "../../../images/wise.png"
import paypal from "../../../images/paypal.png"
import { PayPalButtons } from '@paypal/react-paypal-js'

const Creditcard = () => {
  return (
      <div className='creditcard'>
          <p className='paragraph-payment-options'>Available Payment Options</p>
          {/* <PayPalButtons className='ton tin' /> */}
          {/* <PayPalButtons /> */}
          <div className='creditcard-options'>
          <div className='credicard-active-option'>
              <p className='paragraph-option-titles'>Method</p>
              <p className='paragraph-option-titles'>Status</p>
          </div>
              <hr className='credit-card-hr'></hr>
            <div className='credicard-active-options'>
                <a><img src={ visa} loading="eager" alt="visa" />Credit Card</a>
              <p className='ton tan'>Active</p>
          </div>
              <hr className='credit-card-hr'></hr>
           <div className='credicard-active-options'>
              <a><img src={paypal} loading="eager" alt="paypal" /> Paypal</a>
              <p className='ton tan'>Active</p>
          </div>
              <hr className='credit-card-hr'></hr>
           <div className='credicard-active-options'>
              <a><img src={ wise} loading="eager" alt="wise" /> Wise</a>
              <p className='ton tan'>Active</p>
          </div>
          </div>
      </div>
  )
}

export default Creditcard