import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contextr/AuthContext';

const Paypalbutton = (props) => {
  const { pay_amount, product, onClose } = props;
  const navigate = useNavigate();

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const {state} = useContext(AuthContext)

  const handleApprove = async (orderId, payerEmail, payerName) => {
    // handle backend function to fulfill order

    // if response is success
    setPaidFor(true);

    // Store the payment data in the "banks" collection in Firebase
    const banksCollection = collection(db, 'banks');
    const paymentData = {
      name: product.description,
      amount: pay_amount,
      orderID: orderId,
      timestamp: serverTimestamp(),
      email_address: payerEmail,
      given_name: payerName,
      user_id: state.user.uid,
    };

    try {
      await addDoc(banksCollection, paymentData);
      console.log("Payment data stored successfully");

      // Display success message
      setShowSuccessDialog(true);

      // Close the dialog after 2 seconds (you can adjust the delay as needed)
      setTimeout(() => {
        setShowSuccessDialog(false);
        // onClose(); // Ensure onClose is a function to close the Paypal dialog
        navigate('/dashboard'); // Redirect to "/dashboard" after closing the dialog
      }, 3000);
    } catch (e) {
      console.error("Error storing payment data:", e);
      setError("Error storing payment data");
    }
  };

  return (
    <div>
      <PayPalButtons 
        style={{
          color: "silver",
          layout: "horizontal",
          height: 48,
          tagline: false,
          shape: "pill"
        }}
        onClick={(data, actions) => {
          // Validate on the button click, client or server-side
          const hasAlreadyBoughtCourse = false;
          if (hasAlreadyBoughtCourse) {
            setError(
              "You already bought this course. Go to your account and view your list of courses"
            );
            return actions.reject();
          } else {
            return actions.resolve();
          }
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: product.description,
                amount: {
                  value: pay_amount
                }
              }
            ]
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          console.log("order", order);

          // Extract email and name from PayPal response
          const payerEmail = order.payer.email_address;
          const payerName = order.payer.name.given_name;

          handleApprove(data.orderID, payerEmail, payerName);
        }}
        onCancel={() => {
          // display the cancel message to the user or redirect appropriately.
        }}
        onError={(err) => {
          setError(err);
          console.error("Paypal checkout onError", err);
        }}
      />

      {showSuccessDialog && (
        <div className="success-dialog">
          <p>${`${pay_amount} paid successfully!`}</p>
        </div>
      )}
    </div>
  );
};

export default Paypalbutton;