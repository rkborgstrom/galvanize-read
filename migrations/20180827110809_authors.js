exports.up = function(knex, Promise) {
    return knex.schema.createTable('authors', (table) => {
        table.increments('id').primary();
        table.text('first_name');
        table.text('last_name');
        table.text('bio');
        table.text('portrait_url');

    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('authors');
};