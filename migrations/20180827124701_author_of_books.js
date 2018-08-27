exports.up = function(knex, Promise) {
    return knex.schema.createTable('author_of_books', (table) => {
        table.integer('book_id').references(books.id).onDelete('cascade');
        table.integer('author_id').references(authors.id).onDelete('cascade');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('author_of_books');
};