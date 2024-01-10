// const express = require("express");
import  express  from "express";

const app = express();
// const TokenRoute = require("./routes/token") 
// const UserRoute = require("./routes/users")
import TokenRoute from './routes/token.js'
import UserRoute from './routes/users.js'
// require("dotenv").config();
// const cors = require("cors");
import cors from 'cors';
// const { default: axios } = require("axios");

app.listen(5000, () => {
  console.log("server run nicely");
});
// app.use(cors);
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.get("/", (req, res) => {
  res.send("Mpesa backend");
});

app.use("/token", TokenRoute)
app.use("/users", UserRoute)

app.post('/mpesa-callback', (req, res) => {
  const transactionId = req.body.TransactionID;
  const amount = req.body.Amount;
  const phoneNumber = req.body.PhoneNumber;

  // Process the transaction data here
  console.log(`Transaction ID: ${transactionId}`);
  console.log(`Amount: ${amount}`);
  console.log(`Phone number: ${phoneNumber}`);

  // Send a response to M-Pesa
  res.status(200).send({
    ResultCode: 0,
    ResultDesc: 'Transaction processed successfully'
  });
});

