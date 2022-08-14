const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    EMAIL: {
        type:String,
        required:true,
        unique:true
    },

USERNAME: {
    type:String,
    required:true
},


PASSWORD: {
    type:String,
    required:true
},

CONFIRMPASSWORD: {
    type:String,
    required:true
},

MOBILE: {
    type:Number,
    required:true,
    unique:true
},

DOB: {
    type:Date,
    required:true
},

ADDRESS: {
    type:String,
    required:true
},

is_admin: {
    type:Number
},
})


const User =mongoose.model('Register',userSchema);

module.exports = User;