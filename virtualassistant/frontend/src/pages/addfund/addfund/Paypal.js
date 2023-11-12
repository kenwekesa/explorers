import React, { useState, useParams } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contextr/AuthContext';
import "./Cardbtn.css"

const Paypal = ({ isOpen, onClose }) => {


  const [paystatus, setPaystatus] = useState(false);
  const [pay_amount, setAmount] = useState(0);
  const [pay, setPay] = useState(false)


  if (!isOpen) return null;


  const handleCreateOrder = (data, actions) => {

    console.log(pay_amount)

    const paymentDetails = {
      amount: {
        currency_code: 'USD',
        value: pay_amount.toString(), // Replace with your actual payment amount
      },
      payee: {
        email_address: 'wanjooo@gmail.com' // Specify the recipient's email address
      }
    };
  
    return actions.order.create({
      purchase_units: [paymentDetails],
    });
    // return actions.order.create({
    //   purchase_units: [
    //     {
    //       amount: {
    //         value: pay_amount.toString(),
    //       },
    //     },
    //   ],
    // });
  };

  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      setPay(false)
      setPaystatus(true)
    });
  };
    

  const handleAmountChange = (event) => {
    // Access the value from the event
    const newAmount = event.target.value;

    // Update the state with the new amount
    setAmount(newAmount);

    // You can perform additional actions with the new amount if needed
  };


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
                        quantity: pay_amount,
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
        <input type="number"  placeholder="Enter amount" onChange={handleAmountChange}/>
         {/* <PayPalScriptProvider options={initialOptions}> */}
            <PayPalButtons style={{ layout: "horizontal" }}
            createOrder={handleCreateOrder}
            onApprove={handleApprove}
            />
          {/* <PayPalButtons /> */}
         {/* </PayPalScriptProvider> */}
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Paypal

// import React, { useState } from 'react';
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import { useNavigate } from 'react-router-dom';
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
// import { auth, db } from '../../../firebase/firebase';

// const Paypal = ({ isOpen, onClose }) => {
//   const [paystatus, setPaystatus] = useState(false);
//   const [pay_amount, setAmount] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const [pay, setPay] = useState(false)
//   const navigate = useNavigate();

//   if (!isOpen) return null;

//   const handleCreateOrder = (data, actions) => {
//     const paymentDetails = {
//       amount: {
//         currency_code: 'USD',
//         value: pay_amount.toString(),
//       },
//       payee: {
//         email_address: 'wanjooo@gmail.com',
//       }
//     };

//     return actions.order.create({
//       purchase_units: [paymentDetails],
//     });
//   };

//   const handleApprove = async (data, actions) => {
//     const orderID = data.orderID;
//     const details = await actions.order.capture();

//     const name = details.payer.name.given_name;
//     setPay(false);
//     setPaystatus(true);

//     // Store the payment data in the "funds" collection in Firebase
//     const fundsCollection = collection(db, 'funds');
//     const paymentData = {
//       name,
//       amount: pay_amount,
//       orderID,
//       timestamp: serverTimestamp(),
//     };

//     await addDoc(fundsCollection, paymentData);

//     navigate('/'); // Redirect to home page or any other page after successful payment and data storage
//   };

//   const handleAmountChange = (event) => {
//     const newAmount = event.target.value;
//     setAmount(newAmount);
//   };

//   const initialOptions = {
//     clientId: "YOUR_PAYPAL_CLIENT_ID",
//     currency: "USD",
//     intent: "capture",
//   };

//   return (
//     <div className="dialog-background">
//       <div className="dialog-box dialog-box-elevation">
//         <h2>Add funds to your account!</h2>
//         <input type="number" placeholder="Enter amount" onChange={handleAmountChange} />
//         <PayPalScriptProvider options={initialOptions}>
//           <PayPalButtons
//             style={{ layout: "horizontal" }}
//             createOrder={handleCreateOrder}
//             onApprove={handleApprove}
//           />
//         </PayPalScriptProvider>
//         <button
//           className="close-button"
//           onClick={() => {
//             onClose();
//             // Add the route you want to navigate to after closing
//             navigate('/'); 
//           }}
//         >
//           X
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Paypal;
