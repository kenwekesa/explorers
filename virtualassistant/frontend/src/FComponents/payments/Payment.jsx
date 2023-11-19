import React from 'react';
import PaymentIcon from '@mui/icons-material/Payment';
import { PayPalScriptProvider, PayPalButtons } from  'react-paypal';

import './payments.scss';

function Payment() {
  return (
    <div className="payment-container">
      <PaymentIcon style={{ fontSize: 50, marginBottom: 20 }} />

      <PayPalScriptProvider options={{ 'client-id': 'ARZPVYHWVjJ4IVtkZ73QbEFP20t2sy_5wiboTH5ZJjLVgard3SA1vWbKZ9TiXWn2j3mGHxZaDe6oK4Lq' }}>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: '10.00', // Replace with the actual amount
                  },
                },
              ],
            });  
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              // Add your payment processing logic here
              console.log('Payment successful:', details);
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default Payment;




// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import PaymentIcon from '@mui/icons-material/Payment';

// import './payments.scss';

// function Payment() {
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [isExpiryDateTyped, setIsExpiryDateTyped] = useState(false);
//   const [cvv, setCvv] = useState('');


//   const formatCardNumber = (input) => {
//     // Remove non-digit characters
//     const numericInput = input.replace(/\D/g, '');

//     // Add spaces after every four digits
//     return numericInput.replace(/(\d{4})/g, '$1 ').trim();
//   };

//   const handleCardNumberChange = (e) => {
//     const formattedInput = formatCardNumber(e.target.value);
//     setCardNumber(formattedInput);
//   };

//   const handlePaymentSubmit = (event) => {
//     event.preventDefault();
//     // Add your payment processing logic here
//   };

//   const handleExpiryDateChange = (e) => {
//     setExpiryDate(e.target.value);
//     setIsExpiryDateTyped(true);
//   };

//   return (
//     <div className="payment-container">
//       <PaymentIcon style={{ fontSize: 50, marginBottom: 20 }} />
//       <form onSubmit={handlePaymentSubmit}>
//         <TextField
//           label="Card Number"
//           variant="outlined"
//           fullWidth
//           value={cardNumber}
//           onChange={handleCardNumberChange}
//           required
//         />
//         <TextField
//           label="Expiry Date"
//           variant="outlined"
//           placeholder="MM/YY"
//           fullWidth
//           value={expiryDate}
//           onChange={handleExpiryDateChange}
//           required
//         />
//         <TextField
//           label="CVV"
//           variant="outlined"
//           fullWidth
//           value={cvv}
//           onChange={(e) => setCvv(e.target.value)}
//           required
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           type="submit"
//           style={{ marginTop: 20 }}
//         >
//           Pay Now
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default Payment;
