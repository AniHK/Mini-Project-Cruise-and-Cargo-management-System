const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
Nam: {
    type:String,
    required:true
},



CTyp: {
    type:String,
    required:true
},

Dimensio: {
    type:String,
    required:true
},

No_of_containe: {
    type:Number,
    required:true
},

Quantit: {
    type:Number,
    required:true
},



WarPlace: {
    type:String
},
})


const Ad =mongoose.model('Order',adSchema);

module.exports = Ad;