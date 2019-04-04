
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bonus', table => {
        table.increments()
        table.string('bonus1')
        table.string('bonus2')
        table.string('bonus3')
        table.string('bonus4')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bonus')
};
