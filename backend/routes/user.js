const express = require("express");
const { zodLogin , zodSignup, zodUpdate } = require("../models/zod");
require('dotenv').config();
const jwt = require('jsonwebtoken');
const {User , Account} = require('../models/user.model')
const userRouter = express.Router();
const {authMiddleware} = require('../middleware')
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
});
userRouter.post('/signin' , (req , res) => {
    let body = req.body;
    if(zodLogin.safeParse(body).success){
        User.findOne(body)
        .then((data) => {
            if(data = null){
                res.status(404).json({
                    message: "Invalid username or password"
                })
            }
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
})
userRouter.put('/update' , authMiddleware , (req , res) => {
    let body = req.body;
    let success = zodUpdate.safeParse(req.body).success;
    if(!success){
        res.status(411).json({
            message: "Invalid input"
        })
    }
    User.updateOne({_id : req.userId} , body)
    .then(() => {
        res.status(200).json({
            message: "successfully Updated"
        })
    })
    .catch(() =>{
        res.status(411).json({
            message: "Something went wrong"
        })
    })
})
module.exports = userRouter;