import React from 'react'
import "./Cardbtn.css"
import { PayPalButtons } from "@paypal/react-paypal-js";


const Cardbtn = () => {
  // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            
            // setSuccess(true);
        });
    };

    const createOrder = (data, actions) => {
      return actions.order.create({
          purchase_units: [
              {
                  description: "Sunflower",
                  amount: {
                      currency_code: "USD",
                      value: 20,
                  },
              },
          ],
      }).then((orderID) => {
              // setOrderID(orderID);
              return orderID;
          });
  };

  return (
    <div className='cardbtn'>
       <div><a className='ton tin'>STRIPE</a></div>  
       
        <PayPalButtons className='ton tin' 
        createOrder={createOrder}
        onApprove={onApprove}
        />
       
       <div><a className='ton tin'>BANK/OTHER</a></div> 
    </div>
  )
}

export default Cardbtn