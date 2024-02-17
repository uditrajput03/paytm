const express = require('express');
const { default: connectDb } = require('./db');
const app = express();
const routes = require('./routes/index')
const userRouter = require('./routes/user')
app.use('/api/v1' , routes);
app.use('/api/v1/user' , userRouter);

//console.log(typeof connectDb);