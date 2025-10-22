const redisClient = require('../config/redis');
const User=require('../models/user');
const validate=require('../utils/validator');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const register=async (req,res)=>{
    try {
        // validate the data
        validate(req.body); 
        const {firstName,emailId,password}=req.body;
        req.body.password=await bcrypt.hash(password,10);
        // user shouldn't be declared him/her self as admin
        req.body.role='user';

       const user=await User.create(req.body);
       const token=jwt.sign({_id:user._id,emailId:emailId,role:'user'},process.env.JWT_KEY,{expiresIn:60*60});
       res.cookie('token',token,{maxAge:60*60*1000});
       res.status(201).send({message:'User registered successfully'});
    } catch (error) {
        res.status(400).send("Error: "+error);
    }
}

const login=async (req,res)=>{
try {
    const {emailId,password}=req.body;
    if(!emailId){
        throw new Error('Email Id is required');
    }
    if(!password){
        throw new Error('Password is required');
    }
    const user=await User.findOne({emailId});
    const match=await bcrypt.compare(password,user.password);
    if(!match){
        throw new Error('Invalid credentials');
    }
    const token=jwt.sign({_id:user._id,emailId:emailId,role:user.role},process.env.JWT_KEY,{expiresIn:60*60});
    res.status(200).send("Logged In Successfully");
} catch (error) {
    res.status(401).send("Error: "+error);
}
}

const logout=async (req,res)=>{
    try {
        // validate the token 
        const {token}=req.cookies;
        const payload=jwt.decode(token);

        await redisClient.set(`token:${token}`,'Blocked');
        await redisClient.expireAt(`token:${token}`,payload.expiry)
        // add that token to blacklist of redis till expiry
        // clear the cookies
        res.cookie("token",null,{expires:new Date(Date.now())});
        res.send("Logged Out Successfully")
    } catch (error) {
        res.status(503).send("Error: "+error);
    }
}

const adminRegister=async(req,res)=>{
    try {
        // validate the data
        if(req.body.role && req.body.role!='admin'){
            throw new Error('Invalid Credentials');
        }
        validate(req.body); 
        const {firstName,emailId,password}=req.body;
        req.body.password=await bcrypt.hash(password,10);
        // admin shouldn't be declared him/her self as user
        // req.body.role='admin';  not needed as we are checking above

       const user=await User.create(req.body);
       const token=jwt.sign({_id:user._id,emailId:emailId,role:user.role},process.env.JWT_KEY,{expiresIn:60*60});
       res.cookie('token',token,{maxAge:60*60*1000});
       res.status(201).send({message:'Admin registered successfully'});
    } catch (error) {
        res.status(400).send("Error: "+error);
    } 
}

module.exports={register,login,logout,adminRegister}; 