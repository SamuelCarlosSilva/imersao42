/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('answer', function(table) {
        table.increments('id').primary().notNullable();
        table.integer('response_id').unsigned().notNullable()
          .references('id').inTable('response')
          .onDelete('CASCADE');
        table.integer('question_id').unsigned().notNullable()
          .references('id').inTable('question')
          .onDelete('SET NULL');
        table.text('value').notNullable();
    
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('answer');
};
