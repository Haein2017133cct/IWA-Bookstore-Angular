var express = require('express');
var router = express.Router();
var bookCtrl = require('../controller/book-controller');

// var mongoose = require('mongoose');
// var Book = require('../models/Book.js');

/* Get all books */
router.get('/', bookCtrl.getbooks);
/* get a book by id */
router.get('/:id',bookCtrl.getbook);
/* get by author and return with title and isbn */
router.get('/author/:author', bookCtrl.getbookByAuthor);
/* crate a book */
router.post('/',bookCtrl.createBooks);
/* update a book */
router.put('/:id',bookCtrl.updateBooks);
/* delete a book */
router.delete('/:id',bookCtrl.deleteBooks);

module.exports = router;



