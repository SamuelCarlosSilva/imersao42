/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('question_option', function(table) {
      table.increments('id').primary();
      table.integer('question_id').unsigned().notNullable()
           .references('id').inTable('question')
           .onDelete('CASCADE');
      table.string('text').notNullable();
      table.integer('position').notNullable();
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('question_option');
  };