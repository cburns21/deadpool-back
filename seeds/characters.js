
exports.seed = function(knex, Promise) {
  return knex('characters').del()
    .then(function () {
      return knex('characters').insert([
        {
          name: 'Jon Snow',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Sansa Stark',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Arya Stark',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Bran Stark',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Tormund Giantsbane',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Jon Snow',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Jon Snow',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Jon Snow',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Jon Snow',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Jon Snow',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Jon Snow',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Jon Snow',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Jon Snow',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Jon Snow',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Jon Snow',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Jon Snow',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Jon Snow',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Jon Snow',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Jon Snow',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Jon Snow',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Jon Snow',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Jon Snow',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Jon Snow',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        },
        {
          name: 'Jon Snow',
          question1_answer: true,
          question2_answer: 1,
          question3_answer: true,
          picture: ''
        }
      ]);
    });
};
