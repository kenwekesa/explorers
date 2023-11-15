// import React, { useState } from 'react';
// // import CreditCard from "react-credit-card";
// // import Cards from "react-credit-cards-2";
// // import "react-credit-cards-2/dist/es/styles-compiled.css";
// import Axios from "axios"

// const Mpesa = ({ isOpen, onClose }) =>{

//   const [phone, setPhone] = useState()
//   const [amount, setAmount] = useState()

//   const handlePay = (event) => {
//     event.preventDefault()
//     Axios.post("http://localhost:5000/token", {
//       amount, 
//       phone,
//     }).then((res) => {
//       console.log(res)
//     }).catch((error) => {
//       console.log(error)
//     })
//   }

//   if (!isOpen) return null;

//   return (
//     <div className="dialog-background">
//       <div className="dialog-box dialog-box-elevation">
//         <h3>Add funds <span>using Mpesa!</span></h3>
//         <hr></hr>
//         <form>
//           <input placeholder='Phone number' 
//             required
//             className='paypal_input_main'
//             onChange={(e)=>setPhone(e.target.value)}
//           />
//           <input placeholder='Amount'
//             onChange={(e) => setAmount(e.target.value)}
//             required
//             className='paypal_input_main'
//           /> 
//           <div className='ton tin tin-ton'
//           onClick={handlePay}>Add funds!</div>
//         </form>
//         <button className="close-button" onClick={onClose}>
//           X
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Mpesa
// import React, { useState } from 'react';
// import Axios from 'axios';
// import { db } from '../../../firebase/firebase';
// import { setDoc, doc } from 'firebase/firestore';

// const Mpesa = ({ isOpen, onClose }) => {
//   const [phone, setPhone] = useState();
//   const [amount, setAmount] = useState();

//   const handlePay = async (event) => {
//     event.preventDefault();

//     try {
//       // Make a request to obtain the Mpesa token
//       const response = await Axios.post('http://localhost:5000/token', {
//         amount,
//         phone,
//       });

//       // Extract necessary data from the response
//       const { BusinessShortCode, Password, Timestamp, TransactionType, PartyA, PartyB, PhoneNumber, CallBackURL, AccountReference, TransactionDesc } = response.data;

//       // Make a request to the Mpesa API with the obtained data
//       const mpesaResponse = await Axios.post('https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
//         BusinessShortCode,
//         Password,
//         Timestamp,
//         TransactionType,
//         Amount: amount,
//         PartyA,
//         PartyB,
//         PhoneNumber,
//         CallBackURL,
//         AccountReference,
//         TransactionDesc,
//       });

//       // Check if the Mpesa API request was successful
//       if (mpesaResponse.data.ResponseCode === '0') {
//         // If successful, store data to Firebase
//         const collectionRef = db.collection('banks');

//         // Create a unique key for the data
//         const key = collectionRef.doc().id;

//         // Store data to Firebase
//         await setDoc(doc(collectionRef, key), {
//           amount,
//           phone,
//           callbackURL: CallBackURL,
//         });

//         console.log('Payment successful. Data stored in Firebase.');
//       } else {
//         console.log('Payment failed. Check Mpesa API response.');
//       }
//     } catch (error) {
//       console.error('Error during payment:', error);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="dialog-background">
//       <div className="dialog-box dialog-box-elevation">
//         <h3>Add funds <span>using Mpesa!</span></h3>
//         <hr></hr>
//         <form>
//           <input
//             placeholder='Phone number'
//             required
//             className='paypal_input_main'
//             onChange={(e) => setPhone(e.target.value)}
//           />
//           <input
//             placeholder='Amount'
//             onChange={(e) => setAmount(e.target.value)}
//             required
//             className='paypal_input_main'
//           />
//           <div className='ton tin tin-ton' onClick={handlePay}>Add funds!</div>
//         </form>
//         <button className="close-button" onClick={onClose}>
//           X
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Mpesa;

import React, { useState } from 'react';
import Axios from 'axios';
import { db } from '../../../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';

const Mpesa = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState();
  const [amount, setAmount] = useState();

  const handlePay = async (event) => {
    event.preventDefault();

    try {
      // Make a request to obtain the Mpesa token
      const response = await Axios.post('http://localhost:5000/token', {
        amount,
        phone,
      });

      // Extract necessary data from the response
      const { BusinessShortCode, Password, Timestamp, TransactionType, PartyA, PartyB, PhoneNumber, CallBackURL, AccountReference, TransactionDesc } = response.data;

      // Make a request to the Mpesa API with the obtained data
      const mpesaResponse = await Axios.post('https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
        BusinessShortCode,
        Password,
        Timestamp,
        TransactionType,
        Amount: amount,
        PartyA,
        PartyB,
        PhoneNumber,
        CallBackURL,
        AccountReference,
        TransactionDesc,
      });

      // Check if the Mpesa API request was successful
      if (mpesaResponse.data.ResponseCode === '0') {
        // If successful, store only user input data to Firebase
        const collectionRef = collection(db, 'banks');

        // Store only user input data to Firebase using addDoc
        const docRef = await addDoc(collectionRef, {
          amount,
          phone,
        });

        console.log('Payment successful. User input data stored in Firebase with document ID:', docRef.id);
      } else {
        console.log('Payment failed. Check Mpesa API response.');
      }
    } catch (error) {
      console.error('Error during payment:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="dialog-background">
      <div className="dialog-box dialog-box-elevation">
        <h3>Add funds <span>using Mpesa!</span></h3>
        <hr></hr>
        <form>
          <input
            placeholder='Phone number'
            required
            className='paypal_input_main'
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            placeholder='Amount'
            onChange={(e) => setAmount(e.target.value)}
            required
            className='paypal_input_main'
          />
          <div className='ton tin tin-ton' onClick={handlePay}>Add funds!</div>
        </form>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Mpesa;

