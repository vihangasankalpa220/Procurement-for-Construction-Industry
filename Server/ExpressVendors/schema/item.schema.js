/*
* @author : Asiri Hewage
*/
const mongoose = require("mongoose")
const Schema = mongoose.Schema

var itemSchema = new Schema({
    itemCode: { type: String, match: /[a-zA-Z0-9 ]/ },
    itemName: { type: String, match: /[a-zA-Z0-9 ]/ , default: 'untitled Item' },
    description: { type: String, match: /[a-zA-Z0-9 ]/ }
});

module.exports = Item = mongoose.model('item', itemSchema)