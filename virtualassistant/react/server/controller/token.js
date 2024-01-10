// const axios = require("axios");
import axios from "axios";

export const createToken = async (req, res, next) => {
  const secret = "29DHIKNae8Y21TYR";
  const consumer = "p9t508mOsABPsSU11muULdrfnbmw0vjX";
  const auth = new Buffer.from(`${consumer}:${secret}`).toString("base64");
  await axios
    .get(
      "https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: {
          authorization: `Basic ${auth}`,
        },
      }
    )
    .then((data) => {
      token = data.data.access_token;
      console.log(data.data);
      next();
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err.message);
    });
};



export const postStk = async (req, res) => {
  const shortCode = 4119567;
  const phone = req.body.phone.substring(1);
  const amount = req.body.amount;
  const passkey =
    "5c973b3b8967d889259776b058248347962926aea0943773301f482cb35db058";
  const url = "https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
  const date = new Date();
  const timestamp =
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);
  const password = new Buffer.from(shortCode + passkey + timestamp).toString(
    "base64"
  );
  const data = {
    BusinessShortCode: shortCode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: `254${phone}`,
    PartyB: shortCode,
    PhoneNumber: `254${phone}`,
    CallBackURL: "http://ambyachievers.org/path",
    AccountReference: "Mpesa",
    TransactionDesc: "stk push",
  };

  await axios
    .post(url, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((data) => {
      console.log(data);
      res.status(200).json(data.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err.message);
    });
};

// module.exports = { createToken, postStk };


// const axios = require("axios");
// const { addDoc, collection } = require('firebase/firestore');
// const { db } = require('../firebase/firebase');

// const createToken = async (req, res, next) => {
//   const secret = "29DHIKNae8Y21TYR";
//   const consumer = "p9t508mOsABPsSU11muULdrfnbmw0vjX";
//   const auth = new Buffer.from(`${consumer}:${secret}`).toString("base64");
  
//   try {
//     const response = await axios.get(
//       "https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
//       {
//         headers: {
//           authorization: `Basic ${auth}`,
//         },
//       }
//     );
    
//     token = response.data.access_token;

//     // Log the data
//     console.log(response.data);

//     // Continue with the next middleware
//     next();
//   } catch (err) {
//     console.error(err);
//     res.status(400).json(err.message);
//   }
// };

// const postStk = async (req, res) => {
//   const shortCode = 4119567;
//   const phone = req.body.phone.substring(1);
//   const amount = req.body.amount;
//   const passkey =
//     "5c973b3b8967d889259776b058248347962926aea0943773301f482cb35db058";
//   const url = "https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
//   const date = new Date();
//   const timestamp =
//     date.getFullYear() +
//     ("0" + (date.getMonth() + 1)).slice(-2) +
//     ("0" + date.getDate()).slice(-2) +
//     ("0" + date.getHours()).slice(-2) +
//     ("0" + date.getMinutes()).slice(-2) +
//     ("0" + date.getSeconds()).slice(-2);
//   const password = new Buffer.from(shortCode + passkey + timestamp).toString(
//     "base64"
//   );
//   const data = {
//     BusinessShortCode: shortCode,
//     Password: password,
//     Timestamp: timestamp,
//     TransactionType: "CustomerPayBillOnline",
//     Amount: amount,
//     PartyA: `254${phone}`,
//     PartyB: shortCode,
//     PhoneNumber: `254${phone}`,
//     CallBackURL: "http://ambyachievers.org/path",
//     AccountReference: "Mpesa",
//     TransactionDesc: "stk push",
//   };

//   try {
//     const response = await axios.post(url, data, {
//       headers: {
//         authorization: `Bearer ${token}`,
//       },
//     });

//     console.log(response);

//     // Store payment data in Firebase Firestore
//     const paymentData = {
//       amount: amount,
//       phoneNumber: phone,
//       callbackMessage: response.data,
//       timestamp: timestamp,
//     };

//     await addDoc(collection(db, 'banks'), paymentData);

//     res.status(200).json(response.data);
//   } catch (err) {
//     console.error(err);
//     res.status(400).json(err.message);
//   }
// };

// module.exports = { createToken, postStk };

// const axios = require("axios");
// const { addDoc, collection } = require('firebase/firestore');
// const { db } = require('../firebase/firebase');


// const createToken = async (req, res, next) => {
//   const secret = "29DHIKNae8Y21TYR";
//   const consumer = "p9t508mOsABPsSU11muULdrfnbmw0vjX";
//   const auth = new Buffer.from(`${consumer}:${secret}`).toString("base64");
  
//   try {
//     const response = await axios.get(
//       "https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
//       {
//         headers: {
//           authorization: `Basic ${auth}`,
//         },
//       }
//     );
    
//     token = response.data.access_token;

//     // Log the data
//     console.log(response.data);

//     // Continue with the next middleware
//     next();
//   } catch (err) {
//     console.error(err);
//     res.status(400).json({ error: "Failed to retrieve access token from Safaricom API" });
//   }
// };

// const postStk = async (req, res) => {
//   const shortCode = 4119567;
//   const phone = req.body.phone.substring(1);
//   const amount = req.body.amount;
//   const passkey =
//     "5c973b3b8967d889259776b058248347962926aea0943773301f482cb35db058";
//   const url = "https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
//   const date = new Date();
//   const timestamp =
//     date.getFullYear() +
//     ("0" + (date.getMonth() + 1)).slice(-2) +
//     ("0" + date.getDate()).slice(-2) +
//     ("0" + date.getHours()).slice(-2) +
//     ("0" + date.getMinutes()).slice(-2) +
//     ("0" + date.getSeconds()).slice(-2);
//   const password = new Buffer.from(shortCode + passkey + timestamp).toString(
//     "base64"
//   );
//   const data = {
//     BusinessShortCode: shortCode,
//     Password: password,
//     Timestamp: timestamp,
//     TransactionType: "CustomerPayBillOnline",
//     Amount: amount,
//     PartyA: `254${phone}`,
//     PartyB: shortCode,
//     PhoneNumber: `254${phone}`,
//     CallBackURL: "http://ambyachievers.org/path",
//     AccountReference: "Mpesa",
//     TransactionDesc: "stk push",
//   };

//   try {
//     const response = await axios.post(url, data, {
//       headers: {
//         authorization: `Bearer ${token}`,
//       },
//     });

//     console.log(response);

//     // Store payment data in Firebase Firestore
//     const paymentData = {
//       amount: amount,
//       phoneNumber: phone,
//       callbackMessage: response.data,
//       timestamp: timestamp,
//     };

//     await addDoc(collection(db, 'banks'), paymentData);

//     res.status(200).json(response.data);
//   } catch (err) {
//     console.error(err);

//     // Handle network error more gracefully
//     if (err.isAxiosError && err.response) {
//       res.status(err.response.status).json({ error: err.response.data });
//     } else {
//       res.status(500).json({ error: "Internal server error" });
//     }
//   }
// };

// module.exports = { createToken, postStk };
