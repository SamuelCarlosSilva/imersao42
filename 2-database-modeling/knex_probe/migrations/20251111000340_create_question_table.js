/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('question', function(table) {
        table.increments('id').primary().notNullable();
        table.integer('form_id').unsigned().notNullable()
          .references('id').inTable('form')
          .onDelete('CASCADE');
        table.string('text').notNullable();
    
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('question');
};
