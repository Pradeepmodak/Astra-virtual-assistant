const express=require('express');
const app=express();
require('dotenv').config({ path: __dirname + '/../.env' });
const main=require('./config/db');
const cookie_parser=require('cookie-parser');
const authRouter=require('./routes/userAuth');
app.use(express.json());
app.use(cookie_parser());
app.use('/user',authRouter);
const redisClient=require("./config/redis");

const InitializeConnection=async()=>{
    try {
    await Promise.all([main(),redisClient.connect()]);
    console.log("Connected to all services");   
    app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
    })
    } catch (error) {
       console.log("Error Occured: "+error); 
    }
}
InitializeConnection();
