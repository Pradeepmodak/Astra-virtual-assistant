const jwt=require('jsonwebtoken');
const User=require("../models/user");
const redisClient=require("../config/redis")
const userMiddleware=async(req,res,next)=>{
    try {
        const token=req.cookies.token;
        if(!token){
            throw new Error('Unauthorized');
        }
        const payload=jwt.verify(token,process.env.JWT_KEY);
        const{_id}=payload;
        if(!_id){
            throw new Error('Invalid Token');
        }
        const result=await User.findById(_id);
        if(!result){
            throw new Error('User not found');
        }
        // Redis ke block list me present toh nhi hai token
        const IsBlocked=await redisClient.exists(`token:${token}`);
        if(IsBlocked){
            throw new Error('Invalid Token');
        }
        req.user=result;
        next();
    } catch (error) {
        res.status(401).send("Error: "+error);
    }
}

module.exports=userMiddleware;