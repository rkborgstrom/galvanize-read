'use strict';
/* eslint-env node */
/* eslint-disable no-use-before-define */

let router = require('express').Router();
let env = process.env.NODE_ENV || 'development';
let config = require('../knexfile')[env];
let knex = require('knex')(config);

router.get('/books', (req, res, next) => {
	knex('books')
		.select('books.cover_url', 'books.title', 'authors.first_name', 'authors.last_name', 'books.genre', 'books.description')
		.from('books')
		.innerJoin('author_of_books', 'books.id', 'author_of_books.books_id')
		.innerJoin('authors', 'authors.id', 'author_of_books.authors_id')
		.returning('*')
		.then((books) => {
			res.render('books', {
				books
			});
		})
		.catch((err) => {
			next(err);
		});
});

module.exports = router;