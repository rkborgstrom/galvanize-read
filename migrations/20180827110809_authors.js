exports.up = function(knex, Promise) {
    return knex.schema.createTable('authors', (table) => {
        table.foreign('authors').references('author_of_books');
        table.increments('id');
        table.text('first_name');
        table.text('last_name');
        table.text('bio');
        table.text('portrait_url');

    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('authors');
};