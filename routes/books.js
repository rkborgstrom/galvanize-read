'use strict'; 
/* eslint-env node */
/* eslint-disable no-use-before-define */

let router = require('express').Router();
let env = process.env.NODE_ENV || 'development';
let config = require('../knexfile')[env];
let knex = require('knex')(config);

router.get('/books', (req, res, next) => {
  knex('books')
  .returning('*')
  .then((books) => {
      res.render('books', {books});
  })
  .catch((err) => {
      next(err);
  });
});

module.exports = router;