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


       const user=await User.create(req.body);
       const token=jwt.sign({_id:user._id,emailId:emailId},process.env.JWT_SECRET,{expiresIn:60*60});
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
    const token=jwt.sign({_id:user._id,emailId:emailId},process.env.JWT_SECRET,{expiresIn:60*60});
    res.status(200).send("Logged In Successfully");
} catch (error) {
    res.status(401).send("Error: "+error);
}
}

const logout=async (req,res)=>{
    try {
         
    } catch (error) {
        
    }
}