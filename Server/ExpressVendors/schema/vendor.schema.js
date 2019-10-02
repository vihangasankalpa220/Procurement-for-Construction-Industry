/*
* @author : Asiri Hewage
*/
const mongoose = require("mongoose")
const Schema = mongoose.Schema

var vendorSchema = new Schema({
    vendorName: { type: String, match: /[a-zA-Z0-9 ]/, default: 'untitled Vendor' },
    vendorDescription: { type: String },
    vendorAddress: { type: String  },
    vendorCountry: { type: String },
    vendorContactNumber: { type: String, match: /[0-9]/},
    vendorTagline: { type: String },
    vendorImage: { type: String }
});

module.exports = Vendor = mongoose.model('vendor', vendorSchema)