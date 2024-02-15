const express = require('express');
const { default: connectDb } = require('./db');
const app = express();

console.log(typeof connectDb);