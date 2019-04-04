
exports.up = function(knex, Promise) {
    return knex.schema.createTable('players', table => {
        table.increments()
        table.string('name')
        table.integer('team_id')
        table.string('bonus1answer')
        table.string('bonus2answer')
        table.string('bonus3answer')
        table.string('bonus4answer')
        })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players')
};
