exports.up = function(knex, Promise) {
    return knex.schema.createTable('author_of_books', (table) => {
        table.integer('books_id').references('books.id').onDelete('cascade');
        table.integer('authors_id').references('authors.id').onDelete('cascade');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('author_of_books');
};