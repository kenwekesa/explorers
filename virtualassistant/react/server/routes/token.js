// const express = require("express");
import  express from "express";
const router = express.Router()
import { createToken, postStk } from '../controller/token.js'
// const {createToken, postStk}= require("../controller/token")

router.post("/",createToken,postStk)
// module.exports = router

export default router