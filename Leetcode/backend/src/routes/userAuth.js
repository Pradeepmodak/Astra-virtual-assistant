const express=require('express');
const authRouter=express.Router();
const {register,login,logout,adminRegister}=require('../controllers/userAuthent');
const userMiddleware=require("../middleware/userMiddlerware")
const adminMiddleware=require("../middleware/adminMiddleware");

//Register
authRouter.post('/register',register);
authRouter.post('/login',login);
authRouter.post('/logout',userMiddleware,logout);
authRouter.post('/admin/register',adminMiddleware,adminRegister);
// authRouter.get('/profile',getProfile);

module.exports=authRouter;