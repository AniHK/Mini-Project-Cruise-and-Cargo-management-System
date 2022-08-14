const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    Id: {
        type:String,
        required:true,
        unique:true
    },

Name: {
    type:String,
    required:true
},


CType: {
    type:String,
    required:true
},

Dimension: {
    type:String,
    required:true
},

No_of_container: {
    type:String,
    required:true
},

Quantity: {
    type:String,
    required:true
},

Price: {
    type:String,
    required:true
},

WarePlace: {
    type:String
},
})


const Admin =mongoose.model('Warehouse',adminSchema);

module.exports = Admin;