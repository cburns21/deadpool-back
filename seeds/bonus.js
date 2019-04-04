
exports.seed = function(knex, Promise) {
  return knex('bonus').del()
    .then(function () {
      // Inserts seed entries
      return knex('bonus').insert([
      {
        
      }
      ]);
    });
};
