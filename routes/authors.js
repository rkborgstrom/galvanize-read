'use strict';
/* eslint-env node */
/* eslint-disable no-use-before-define */

let router = require('express').Router();
let env = process.env.NODE_ENV || 'development';
let config = require('../knexfile')[env];
let knex = require('knex')(config);

router.get('/authors', (req, res, next) => {
	knex('authors')
		.select('authors.first_name', 'authors.last_name', 'authors.bio', 'authors.portrait_url', 'books.title')
		.from('authors')
		.innerJoin('author_of_books', 'authors.id', 'author_of_books.authors_id')
		.innerJoin('books', 'books.id', 'author_of_books.books_id')
		.returning('*')
		.then((authors) => {
			res.render('authors', {
				authors
			});
		})
		.catch((err) => {
			next(err);
		});
});

module.exports = router;
