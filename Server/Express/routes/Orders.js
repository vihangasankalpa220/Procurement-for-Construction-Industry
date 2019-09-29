const express = require("express")
const orders = express.Router()
const cors = require("cors")
const bcrypt = require("bcrypt")
const Order = require("../models/Order")
orders.use(cors())

process.env.SECRET_KEY = 'secret'


orders.post('/addorders', (req, res) => {
    const today = new Date()
    const orderData = {
        order_name: req.body.order_name,
        order_qty: req.body.order_qty,
        type: req.body.type,
        discription: req.body.discription,
        created: today
    }

    Order.findOne({
        order_id: req.body.order_id
    })
        .then(order => {
            if (!order) {
                bcrypt.hash(req.body.order_id, 10, (err, hash) => {
                    orderData.order_id = hash
                    Order.create(orderData)
                        .then(order => {
                            res.json({ status: order.order_id + ' Added!' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.json({ error: 'Order already exists' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})


module.exports = orders
