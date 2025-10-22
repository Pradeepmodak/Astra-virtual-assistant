const validator=require('validator');
const validate=(data)=>{
const mandatoryFields=['firstName','emailId','password'];
const isAllowed=mandatoryFields.every((k)=>Object.keys(data).includes(k));
if(!isAllowed){
    throw new Error('Missing mandatory fields');
}
if(validator.isEmail(data.emailId)===false){
    throw new Error('Invalid email format');
}
if(validator.isStrongPassword(data.password)===false){
    throw new Error('Password is not strong enough');
}
}
module.exports=validate;