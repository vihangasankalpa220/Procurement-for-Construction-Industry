var express = require('express');
var router = express.Router();

//add dummy data set
let data = require('../dummyData/dataSet');

/* ------------------------------ Dummy data set provider : source dummyData/dataSet.js ----------------------------------------*/
router.get('/', function(req, res, next) {
    res.status(200).send({'message':'No data found'});
});

router.get('/vendors', function(req, res, next) {
    res.status(200).send(JSON.stringify(data[0]));
});

router.get('/vendors/:id', function(req, res, next) {
    const country = req.params.id;
    const item = data[1].find(_item => _item.country === country);

    if (item) {
        res.status(200).send(JSON.stringify(item));
    } else {
        res.status(200).send(JSON.stringify({ message: `item ${country} doesn't exist`}));
    }
});

/* ------------------------------ End Dummy data set provider : source dummyData/dataSet.js ----------------------------------------*/
module.exports = router;
