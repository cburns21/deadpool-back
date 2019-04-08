
exports.seed = function(knex, Promise) {
  return knex('leagues').del()
    .then(function () {
      return knex('leagues').insert([
        { name: 'HouseHodor',
         password:'12345'
        },
        {
          name: 'Dragons',
          password: 'westeros'
        }
      ]);
    });
};
