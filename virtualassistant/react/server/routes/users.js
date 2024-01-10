// const express = require("express");
import express from "express";
const router = express.Router()

import {createMail} from '../controller/users.js'
// const {createMail } = require("../controller/users")

router.post("/email",createMail)
// module.exports = router

export default router