
exports.seed = function(knex, Promise) {
  return knex('responses').del()
    .then(function () {
      return knex('responses').insert([
        {
          question1_response:true,
          question2_response: 1,
          question3_response: true,
          player_id:1,
          character_id: 1
        }
      ]);
    });
};
