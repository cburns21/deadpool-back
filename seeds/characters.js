
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        {
          name: '',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,

        }
      ]);
    });
};
