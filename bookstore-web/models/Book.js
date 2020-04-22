var mongoose = require('mongoose');
//create Schema model,define model of book data
var BookSchema = new mongoose.Schema({
  isbn: String,
  author: String,
  title: String,
  publisher: String,
  published_year: Number,
  genre:String,
  price: Number,
  updated_date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Book', BookSchema);
