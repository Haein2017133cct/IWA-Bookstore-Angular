// call basic module of express
var express = require('express');
var path = require('path');
// call express midware
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var book = require('./routes/book');
var app = express();

var mongoose = require('mongoose');
// var port = process.env.PORT || 3000;
require('dotenv').config({path: 'variables.env'});
//db connection
//the reason of adding `bluebird` modules is otherwise you will get warning
//console.log(process.env.mongoDB_URL); // to verify mongodb env, type : node app in console
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.mongoDB_URL, { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json()); //application/json parshing
app.use(bodyParser.urlencoded({'extended':'false'})); //application/x-www-form-urlencoded parsing
app.use(express.static(path.join(__dirname, 'dist/bookstore-web')));
app.use('/', express.static(path.join(__dirname, 'dist'))); //open dist folder as static
app.use('/book', book); // open book.js in routes

/* error handler */
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
