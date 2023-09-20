const express = require('express');
require('dotenv').config()
const connectDB =require('./config/db')
const colors =require('colors')

const welcomeRoute=require('./routes/home.routes');

connectDB()
const app = express();

app.use('/', welcomeRoute);

const port= process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server started in ${process.env.NODE_ENV} mode at ${port}: `.yellow.bold)
})