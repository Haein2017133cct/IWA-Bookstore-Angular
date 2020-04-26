//Install express server
const express = require('express');
const path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
const app = express();
var expAutoSan = require('express-autosanitizer');//validation
var helmet = require('helmet');
var mongoose = require('mongoose');
require('dotenv').config();
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.mongoDB_URL, { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/bookstore-web'));
var realapp = require('./app.js');
var book = require('./routes/book');
app.use('/book', book); // open book.js in routes
app.use(realapp);
app.use(logger('dev'));
app.get('/', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/bookstore-web/index.html'));
});
module.exports = app;

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);