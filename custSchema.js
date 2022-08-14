const mongoose = require('mongoose');

const custSchema = new mongoose.Schema({
Sname: {
        type:String,
        required:true
    },
Goods: {
    type:String
},


Location: {
    type:String
},

Quantity: {
    type:Number,
    required:true
},

SPhone: {
    type:Number,
    required:true
},

Saddress: {
    type:String,
    required:true
},

Rname: {
    type:String,
    required:true
},

Rmobile: {
    type:Number,
    required:true
},

Remail: {
    type:String,
    required:true
},

Raddress: {
    type:String,
    required:true
},

amount: {
    type:Number,
    required:false
},

})


const Customer =mongoose.model('Customer',custSchema);

module.exports = Customer;