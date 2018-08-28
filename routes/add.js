'use strict'; 
/* eslint-env node */
/* eslint-disable no-use-before-define */

let router = require('express').Router();
let env = process.env.NODE_ENV || 'development';
let config = require('../knexfile')[env];
let knex = require('knex')(config);

router.get('/add', (req, res) => {
  res.render('add', {title: 'Create An Account'}); //renders account ejs file
});

router.post('/add', (req, res, next) => {
    knex('books')
    .insert({
        //left side is database columns, right side is 'names' in ejs file 
        title: req.body.title,
        genre: req.body.genre,
        cover_url: req.body.cover_url,
        description: req.body.description,
    }, '*')
  
    .then((books) => {
        res.redirect('/', {books});
    })
  
    .catch((err) => {
        next(err);
    });
  });
  module.exports = router;