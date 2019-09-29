const mongoose = require("mongoose")
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    order_id:{
        type:String
    },
    order_name: {
        type: String
    },
    order_qty: {
        type: String
    },
    type: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = Order = mongoose.model('orders', OrderSchema)
