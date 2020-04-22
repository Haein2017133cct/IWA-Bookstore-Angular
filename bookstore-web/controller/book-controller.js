var mongoose = require('mongoose');
var Book = require('../models/Book.js');

/* Get all books */
exports.getbooks = function(req, res, next) {
  Book.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
};
/* get a book by id */
exports.getbook =  function(req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
};

/* get by author and return with title and isbn */
exports.getbookByAuthor = function(req, res){
    Book.find({author: req.params.author}, {_id: 0, title: 1, isbn: 1},  function(err, books){
        if(err) return res.status(500).json({error: err});
        if(books.length === 0) return res.status(404).json({error: 'book not found'});
        res.json(books);
    })
  };

/* crate a book */
exports.createBooks = function(req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
};

/* update a book */
exports.updateBooks = function(req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
};

/* delete a book */
exports.deleteBooks =function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
};
