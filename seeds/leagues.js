
exports.seed = function(knex, Promise) {
  return knex('leagues').del()
    .then(function () {
      return knex('leagues').insert([
        { name: 'rowValue1', password:''},
        { name: 'rowValue2', password:''},
        { name: 'rowValue3', password:''}
      ]);
    });
};
