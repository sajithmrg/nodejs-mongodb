const mongoose = require('mongoose');
var Schema = mongoose.Schema

const userSchema = new Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})
module.exports = mongoose.model("user",userSchema) //user is mongodb table name