'use strict'; 
/* eslint-env node */
/* eslint-disable no-use-before-define */

let router = require('express').Router();
let env = process.env.NODE_ENV || 'development';
let config = require('../knexfile')[env];
let knex = require('knex')(config);

router.get('/', (req, res, next) => {
    knex('authors')
    .returning('*')
    .then((user_report) => {
        res.render('index', {authors});
    })
    .catch((err) => {
        next(err);
    });
  });



module.exports = router;