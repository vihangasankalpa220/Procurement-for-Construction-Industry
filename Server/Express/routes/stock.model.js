const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Stock
let Stock = new Schema({
    stock_no :{
        type:String
    },
    currency:{
        type:String
    },
    subtotal:{
        type:Number
    },
    qty: {
        type: Number
    },
    payment:{
        type:String
    }
},{
    collection: 'stock'
});

module.exports = mongoose.model('Stock', Stock);