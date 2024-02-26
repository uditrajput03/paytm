const express = require("express");
const { zodLogin, zodSignup, zodUpdate } = require("../models/zod");
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User, Account } = require('../models/user.model')
const accountRouter = express.Router();
const { authMiddleware } = require('../middleware')

accountRouter.get('/balance' , authMiddleware , (req , res) => {
    
})
module.exports = {
    accountRouter
}