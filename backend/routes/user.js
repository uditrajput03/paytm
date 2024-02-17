const express = require("express");
const { zodLogin , zodSignup } = require("../models/zod");
require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/user.model')
const userRouter = express.Router();
userRouter.use('/user' , (req , res) => {
})
userRouter.post('/signup' , async (req , res) => {
    const body = res.body;
    if(zodSignup.safeParse(body).success){
        await User.findOne({email: body.email})
        .then((result) => {
            if(!result._id){
                User.create(body)
                .then((data) => {
                    const token = jwt.sign({email: data.email , userId : data._id} , process.env.JWT_SECRET);
                    res.status(200).json({
                        message: "User created successfully",
                        user: token
                    })
                })
                .catch((e) => {
                    console.log("Error in writing database");
                })
            }
            else{
                res.status(500).json({
                    message: "User already exists"
                })
            }
        })
    }
    else{
        res.status(200).json({
            message: "Invalid Input"
        })
    }
})
module.exports = userRouter;