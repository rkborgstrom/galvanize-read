exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('author_of_books').del()
    .then(function () {
      // Inserts seed entries
      return knex('author_of_books').insert([
        {
          books_id: 1,
          authors_id: 1
        },
        {
          books_id: 1,
          authors_id: 2
        },
        {
          books_id: 1,
          authors_id: 3
        },
        {
          books_id: 2,
          authors_id: 4
        },
        {
          books_id: 3,
          authors_id: 5
        },
        {
          books_id: 4,
          authors_id: 6
        },
        {
          books_id: 5,
          authors_id: 6
        },
        {
          books_id: 6,
          authors_id: 6
        },
      ]);
    });
};