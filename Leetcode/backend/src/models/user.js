const mongoose=require('mongoose');

const {Schema}=mongoose;

const userSchema=new Schema({
    firstName:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20
    },
    lastName:{
        type:String,
        minlength:3,
        maxlength:20
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        immutable:true,
    },
    age:{
        type:Number,
        min:6,
        max:80
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    problemSolved:{
        type:[String],

    },
    password:{
        type:String,
    }
},{
    timestamps:true
});

const User=mongoose.model('User',userSchema);
module.exports=User;