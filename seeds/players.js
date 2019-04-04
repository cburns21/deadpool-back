
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {
          name: 'Michael', 
          team_id:1,
          bonus1answer: true,
          bonus2answer: true,
          bonus3answer: 'Bran Stark',
          bonus4answer: 'Daenerys'
        },
        {
          name: 'Barr', 
          team_id: 1,
          bonus1answer: true,
          bonus2answer: true,
          bonus3answer: 'Jon Snow',
          bonus4answer: 'Bran Stark'
        },
        {
          name: 'Aimee', 
          team_id: 1,
          bonus1answer: true,
          bonus2answer: true,
          bonus3answer: 'Arya Stark',
          bonus4answer: 'Bran Stark'
        },
        {
          name: 'Zeke', 
          team_id: 1,
          bonus1answer: true,
          bonus2answer: true,
          bonus3answer: 'Bran Stark',
          bonus4answer: 'Nobody'
        },
        {
          name: 'Diane', 
          team_id: 1,
          bonus1answer: true,
          bonus2answer: true,
          bonus3answer: 'Daenerys',
          bonus4answer: 'other'
        }
      ]);
    });
};
