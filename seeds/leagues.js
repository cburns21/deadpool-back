
exports.seed = function(knex, Promise) {
  return knex('leagues').del()
    .then(function () {
      return knex('leagues').insert([
        { name: 'House Hodor',
         password:'12345'
        }
      ]);
    });
};
