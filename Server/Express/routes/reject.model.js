const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Reject = new Schema({
    stock_no:{
        type:String
    },
    order_no :{
        type:Number,
    },
    po_number:{
        type:String
    },
    currency:{
        type:String
    },
    subtotal:{
        type:Number
    },
    person_name: {
        type: String
    },
    business_name: {
        type: String
    },
    qty: {
        type: Number
    },
    cusqty:{
        type:Number
    },
    payment:{
        type:String
    },
    bill_address:{
        type:String
    },
    ship_address:{
        type:String
    },
    slot:{
        type:String
    },
    status:{
        type:String
    },
    reason:{
       type: String
    }
},{
    collection: 'reject'
});

module.exports = mongoose.model('Reject', Reject);