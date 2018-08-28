exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', (table) => {
        table.increments('id');
        table.text('title');
        table.text('genre');
        table.text('description');
        table.text('cover_url');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('books');
};