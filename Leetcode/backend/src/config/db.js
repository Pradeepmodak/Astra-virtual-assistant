const mongoose=require('mongoose');

async function main(){
    // console.log("Connecting to DB...");
    await mongoose.connect(process.env.DB_CONNECT_STRING);
}

module.exports=main;