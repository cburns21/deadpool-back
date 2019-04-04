
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {
          name: 'rowValue1', 
          team_id:1,
          bonus1answer: '',
          bonus2answer: '',
          bonus3answer: '',
          bonus4answer: ''
        },
        {
          name: 'rowValue2', 
          team_id: 1,
          bonus1answer: '',
          bonus2answer: '',
          bonus3answer: '',
          bonus4answer: ''
        },
      ]);
    });
};
