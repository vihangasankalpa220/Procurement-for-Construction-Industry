// business.route.js

const express = require('express');
const stockRoutes = express.Router();

// Require Business model in our routes module
let Stock = require('./stock.model');

// Defined store route
stockRoutes.route('/add').post(function (req, res) {
    let stock = new Stock(req.body);
    stock.save()
        .then(stock => {
            res.status(200).json({'stock': 'stock in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
stockRoutes.route('/').get(function (req, res) {
    Stock.find(function(err, stocks){
        if(err){
            console.log(err);
        }
        else {
            res.json(stocks);
        }
    });
});

// Defined edit route
stockRoutes.route('/edits/:id').get(function (req, res) {
    let id = req.params.id;
    Stock.findById(id, function (err, stock){
        res.json(stock);
    });
});

//  Defined update route
stockRoutes.route('/update/:id').post(function (req, res) {
    Stock.findById(req.params.id, function(err, stock) {
        if (!stock)
            res.status(404).send("data is not found");
        else {

            stock.stock_no =req.body.stock_no;
            stock.currency=req.body.currency;
            stock.subtotal=req.body.subtotal;
            stock.qty= req.body.qty;
            stock.payment= req.body.payment;




            stock.save().then(stock => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
stockRoutes.route('/delete/:id').get(function (req, res) {
    Stock.findByIdAndRemove({_id: req.params.id}, function(err, stock){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = stockRoutes;
