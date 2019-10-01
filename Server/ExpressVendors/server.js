const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const businessRoute = require('./routes/business.route');
const stockssRoute = require('./routes/stock.route');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://asiri:asiri123@cluster0-lok9v.mongodb.net/procurementDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const itemsCollectio = client.db("procurementDB").collection("items");
  const vendorsCollectio = client.db("procurementDB").collection("vendors");
  const usersCollectio = client.db("procurementDB").collection("users");
  const purchaseCollectio = client.db("procurementDB").collection("purchase");
  const vendorItemsCollectio = client.db("procurementDB").collection("vendorItems");
  console.log('MongoDB Connected');
  // perform actions on the collection object
  client.close();
});


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/business', businessRoute);

app.use('/stock', stockssRoute);

var PORT = process.env.PORT || 5000

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});