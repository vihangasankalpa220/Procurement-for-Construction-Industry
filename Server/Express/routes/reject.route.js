// business.route.js

const express = require('express');
const rejectRoutes = express.Router();

// Require Business model in our routes module
let Reject = require('./reject.model');

// Defined store route
rejectRoutes.route('/add').post(function (req, res) {
    let reject = new Reject(req.body);
    reject.save()
        .then(reject => {
            res.status(200).json({'reject': 'reject in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});





// Defined get data(index or listing) route
rejectRoutes.route('/').get(function (req, res) {
    Reject.find(function(err, rejects){
        if(err){
            console.log(err);
        }
        else {
            res.json(rejects);
        }
    });
});

// Defined edit route
rejectRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Reject.findById(id, function (err, reject){
        res.json(reject);
    });
});

//  Defined update route
rejectRoutes.route('/update/:id').post(function (req, res) {
    Reject.findById(req.params.id, function(err, reject) {
        if (!reject)
            res.status(404).send("data is not found");
        else {

            reject.order_no =req.body.order_no;
            reject.po_number=req.body.po_number;
            reject.currency=req.body.currency;
            reject.subtotal=req.body.subtotal;
            reject.person_name= req.body.person_name;
            reject.business_name= req.body.business_name;
            reject.qty= req.body.qty;
            reject.cusqty=req.body.cusqty;
            reject.payment= req.body.payment;
            reject.bill_address= req.body.bill_address;
            reject.ship_address= req.body.ship_address;
            reject.slot= req.body.slot;
            reject.status=req.body.status;
            reject.reason=req.body.reason;


            reject.save().then(reject => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});




// Defined delete | remove | destroy route
rejectRoutes.route('/delete/:id').get(function (req, res) {
    Reject.findByIdAndRemove({_id: req.params.id}, function(err, reject){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = rejectRoutes;
