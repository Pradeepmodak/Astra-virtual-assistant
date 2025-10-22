const express=require('express');
const app=express();
require.env.config();
const main=require('./config/db');
const cookie_parser=require('cookie-parser');
app.use(express.json());
app.use(cookie_parser());


main().then(async()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on port ${process.env.PORT}`);
    })
})
.catch(err=>{
    console.log("Error Occured: ",err);
})
