const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:{
        type:String
    },
    fatherName:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    phone:{
        type:String,
    }
},{timestamps:true});

const UserModel = mongoose.model('user',UserSchema);

module.exports  = UserModel;