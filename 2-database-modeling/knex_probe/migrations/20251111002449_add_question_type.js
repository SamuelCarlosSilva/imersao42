const enumName = 'question_type_enum';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('question', (table) => {
        table.enum('type', ['paragraph', 'text', 'radio', 'checkbox'], {
          useNative: true,
          enumName
        })
          .notNullable().defaultTo('paragraph');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.alterTable('question', (table) => {
        table.dropColumn('type');
      });
    
      await knex.raw(`DROP TYPE IF EXISTS ${enumName}`);
};
