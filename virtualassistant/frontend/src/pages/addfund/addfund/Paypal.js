import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./Cardbtn.css"

const Paypal = ({ isOpen, onClose }) => {

  if (!isOpen) return null;


    function createOrder() {
        return fetch("/my-server/create-paypal-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // use the "body" param to optionally pass additional order information
            // like product ids and quantities
            body: JSON.stringify({
                cart: [
                    {
                        id: "YOUR_PRODUCT_ID",
                        quantity: "YOUR_PRODUCT_QUANTITY",
                    },
                ],
            }),
        })
            .then((response) => response.json())
            .then((order) => order.id);
    }
    function onApprove(data) {
          return fetch("/my-server/capture-paypal-order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orderID: data.orderID
            })
          })
          .then((response) => response.json())
          .then((orderData) => {
                const name = orderData.payer.name.given_name;
                alert(`Transaction completed by ${name}`);
          });

        }
    
    const initialOptions = {
    clientId: "test",
    currency: "USD",
    intent: "capture",
    }

  return (
    <div className="dialog-background">
      <div className="dialog-box dialog-box-elevation">
        <h2>Add funds to your account!</h2>
         <PayPalScriptProvider options={initialOptions}>
            {/* <PayPalButtons style={{ layout: "horizontal" }}
            createOrder={createOrder}
            onApprove={onApprove}
            /> */}
          <PayPalButtons />
         </PayPalScriptProvider>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Paypal