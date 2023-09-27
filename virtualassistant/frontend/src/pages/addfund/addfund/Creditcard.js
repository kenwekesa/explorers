import React from 'react'
import "./Creditcard.css"

const Creditcard = () => {
  return (
      <div className='creditcard'>
          <p className='paragraph-payment-options'>Available Payment Options</p>
          <div className='creditcard-options'>
          <div className='credicard-active-options'>
              <p className='paragraph-option-titles'>Method</p>
              <p className='paragraph-option-titles'>Status</p>
          </div>
              <hr className='credit-card-hr'></hr>
            <div className='credicard-active-options'>
              <p className='ton'>Method</p>
              <p className='ton tan'>Active</p>
          </div>
              <hr className='credit-card-hr'></hr>
           <div className='credicard-active-options'>
              <p className='ton'>Method</p>
              <p className='ton tan'>Active</p>
          </div>
              <hr className='credit-card-hr'></hr>
           <div className='credicard-active-options'>
              <p className='ton'>Method</p>
              <p className='ton tan'>Active</p>
          </div>
          </div>
      </div>
  )
}

export default Creditcard