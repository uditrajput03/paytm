const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { default: connectDb } = require('./db');
const app = express();
const routes = require('./routes/index');
const userRouter = require('./routes/user');

app.use(cors());
app.use(express.json());
app.use('/api/v1' , routes);
// app.use('/api/v1/user' , userRouter);

console.log(typeof connectDb);
app.listen(3000, ()=> {
    console.log("Listen on port 3000");
});