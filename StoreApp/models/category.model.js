var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name: String,
    image: String
});

var Category = mongoose.model('Category', schema, 'categories');

module.exports = Category;