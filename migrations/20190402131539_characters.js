
exports.up = function(knex, Promise) {
    return knex.schema.createTable('characters', table => {
        table.increments()
        table.string('name')
        table.boolean('question1_answer')
        table.integer('question2_answer')
        table.boolean('question3_answer')
        table.string('picture')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('characters')
};
