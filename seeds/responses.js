
exports.seed = function(knex, Promise) {
  return knex('responses').del()
    .then(function () {
      return knex('responses').insert([
        {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:1,
          character_name: 'Jon Snow'
          },
          {
          question1_response:true,
          question2_response: 2,
          question3_response: false,
          player_id:1,
          character_name: 'Sansa Stark'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:1,
          character_name: 'Arya Stark'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:1,
          character_name: 'Bran Stark'
          },
          {
          question1_response:true,
          question2_response: 1,
          question3_response: true,
          player_id:1,
          character_name: 'Tormund Giantsbane'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:1,
          character_name: 'Beric Dondarrion'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:1,
          character_name: 'Sandor Clegane'
          },
          {
          question1_response:true,
          question2_response: 6,
          question3_response: false,
          player_id:1,
          character_name: 'Davos Seaworth'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:1,
          character_name: 'Daenerys Targaryen'
          },
          {
          question1_response:true,
          question2_response: 1,
          question3_response: true,
          player_id:1,
          character_name: 'Jorah Mormont'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:1,
          character_name: 'Missandei'
          },
          {
          question1_response:true,
          question2_response: 3,
          question3_response: true,
          player_id:1,
          character_name: 'Grey Worm'
          },
          {
          question1_response:true,
          question2_response: 5,
          question3_response: true,
          player_id:1,
          character_name: 'Brienne of Tarth'
          },
          {
          question1_response:true,
          question2_response: 2,
          question3_response: false,
          player_id:1,
          character_name: 'Podrick Payne'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:1,
          character_name: 'Varys'
          },
          {
          question1_response:true,
          question2_response: 6,
          question3_response: false,
          player_id:1,
          character_name: 'Samwell Tarly'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:1,
          character_name: 'Tyrion Lannister'
          },
          {
          question1_response:true,
          question2_response: 6,
          question3_response: true,
          player_id:1,
          character_name: 'Cersei Lannister'
          },
          {
          question1_response:true,
          question2_response: 5,
          question3_response: true,
          player_id:1,
          character_name: 'Jaime Lannister'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:1,
          character_name: 'Yara Greyjoy'
          },
          {
          question1_response:true,
          question2_response: 4,
          question3_response: true,
          player_id:1,
          character_name: 'Theon Greyjoy'
          },
          {
          question1_response:true,
          question2_response: 3,
          question3_response: true,
          player_id:1,
          character_name: 'Bronn'
          },
          {
          question1_response:true,
          question2_response: 5,
          question3_response: true,
          player_id:1,
          character_name: 'Gregor Clegane'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:1,
          character_name: 'Gendry'
          },
        {
        question1_response:false,
        question2_response: null,
        question3_response: null,
        player_id: 2,
        character_name: 'Jon Snow'
        },
        {
        question1_response:false,
        question2_response: null,
        question3_response: null,
        player_id:2,
        character_name: 'Sansa Stark'
        },
        {
        question1_response:false,
        question2_response: null,
        question3_response: null,
        player_id:2,
        character_name: 'Arya Stark'
        },
        {
        question1_response:false,
        question2_response: null,
        question3_response: null,
        player_id:2,
        character_name: 'Bran Stark'
        },
        {
        question1_response:false,
        question2_response: null,
        question3_response: null,
        player_id:2,
        character_name: 'Tormund Giantsbane'
        },
        {
        question1_response:true,
        question2_response: 6,
        question3_response: false,
        player_id:2,
        character_name: 'Beric Dondarrion'
        },
        {
        question1_response:false,
        question2_response: null,
        question3_response: null,
        player_id:2,
        character_name: 'Sandor Clegane'
        },
        {
        question1_response:false,
        question2_response: null,
        question3_response: null,
        player_id:2,
        character_name: 'Davos Seaworth'
        },
        {
        question1_response:false,
        question2_response: null,
        question3_response: null,
        player_id:2,
        character_name: 'Daenerys Targaryen'
        },
        {
        question1_response:false,
        question2_response: null,
        question3_response: null,
        player_id:2,
        character_name: 'Jorah Mormont'
        },
        {
        question1_response:true,
        question2_response: 5,
        question3_response: true,
        player_id:2,
        character_name: 'Missandrei'
        },
        {
        question1_response:true,
        question2_response: 1,
        question3_response: false,
        player_id:2,
        character_name: 'Grey Worm'
        },
        {
        question1_response:true,
        question2_response: 2,
        question3_response: false,
        player_id:2,
        character_name: 'Brienne of Tarth'
        },
        {
        question1_response:false,
        question2_response: null,
        question3_response: null,
        player_id:2,
        character_name: 'Podrick Payne'
        },
        {
        question1_response:false,
        question2_response: null,
        question3_response: null,
        player_id:2,
        character_name: 'Varys'
        },
        {
        question1_response:false,
        question2_response: null,
        question3_response: null,
        player_id:2,
        character_name: 'Samwell Tarly'
        },
        {
        question1_response:false,
        question2_response: null,
        question3_response: null,
        player_id:2,
        character_name: 'Tyrion Lannister'
        },
        {
        question1_response:true,
        question2_response: 3,
        question3_response: true,
        player_id:2,
        character_name: 'Cersei Lannister'
        },
        {
        question1_response:false,
        question2_response: null,
        question3_response: null,
        player_id:2,
        character_name: 'Jaime Lannister'
        },
        {
        question1_response:false,
        question2_response: null,
        question3_response: null,
        player_id:2,
        character_name: 'Yara Greyjoy'
        },
        {
        question1_response:false,
        question2_response: null,
        question3_response: null,
        player_id:2,
        character_name: 'Theon Greyjoy'
        },
        {
        question1_response:false,
        question2_response: null,
        question3_response: null,
        player_id:2,
        character_name: 'Bronn'
        },
        {
        question1_response:false,
        question2_response: null,
        question3_response: null,
        player_id:2,
        character_name: 'Gregor Clegane'
        },
        {
        question1_response:false,
        question2_response: null,
        question3_response: null,
        player_id:2,
        character_name: 'Gendry'
        },
        {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:3,
          character_name: 'Jon Snow'
          },
          {
          question1_response:true,
          question2_response: 3,
          question3_response: true,
          player_id:3,
          character_name: 'Sansa Stark'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:3,
          character_name: 'Arya Stark'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:3,
          character_name: 'Bran Stark'
          },
          {
          question1_response:true,
          question2_response: 1,
          question3_response: true,
          player_id:3,
          character_name: 'Tormund Giantsbane'
          },
          {
          question1_response:true,
          question2_response: 3,
          question3_response: true,
          player_id:3,
          character_name: 'Beric Dondarrion'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:3,
          character_name: 'Sandor Clegane'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:3,
          character_name: 'Davos Seaworth'
          },
          {
          question1_response:true,
          question2_response: 5,
          question3_response: true,
          player_id:3,
          character_name: 'Daenerys Targaryen'
          },
          {
          question1_response:true,
          question2_response: 1,
          question3_response: true,
          player_id:3,
          character_name: 'Jorah Mormont'
          },
          {
          question1_response:true,
          question2_response: 4,
          question3_response: false,
          player_id:3,
          character_name: 'Missandrei'
          },
          {
          question1_response:true,
          question2_response: 4,
          question3_response: true,
          player_id:3,
          character_name: 'Grey Worm'
          },
          {
          question1_response:true,
          question2_response: 3,
          question3_response: true,
          player_id:3,
          character_name: 'Brienne of Tarth'
          },
          {
          question1_response:true,
          question2_response: 3,
          question3_response: false,
          player_id:3,
          character_name: 'Podrick Payne'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:3,
          character_name: 'Varys'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:3,
          character_name: 'Samwell Tarly'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:3,
          character_name: 'Tyrion Lannister'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:3,
          character_name: 'Cersei Lannister'
          },
          {
          question1_response:true,
          question2_response: 2,
          question3_response: true,
          player_id:3,
          character_name: 'Jaime Lannister'
          },
          {
          question1_response:true,
          question2_response: 2,
          question3_response: true,
          player_id:3,
          character_name: 'Yara Greyjoy'
          },
          {
          question1_response:true,
          question2_response: 2,
          question3_response: true,
          player_id:3,
          character_name: 'Theon Greyjoy'
          },
          {
          question1_response:true,
          question2_response: 5,
          question3_response: true,
          player_id:3,
          character_name: 'Bronn'
          },
          {
          question1_response:true,
          question2_response: 4,
          question3_response: true,
          player_id:3,
          character_name: 'Gregor Clegane'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:3,
          character_name: 'Gendry'
          },
        {
          question1_response:true,
          question2_response: 6,
          question3_response: false,
          player_id:4,
          character_name: 'Jon Snow'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:4,
          character_name: 'Sansa Stark'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:4,
          character_name: 'Arya Stark'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:4,
          character_name: 'Bran Stark'
          },
          {
          question1_response:true,
          question2_response: 3,
          question3_response: true,
          player_id:4,
          character_name: 'Tormund Giantsbane'
          },
          {
          question1_response:true,
          question2_response: 2,
          question3_response: false,
          player_id:4,
          character_name: 'Beric Dondarrion'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:4,
          character_name: 'Sandor Clegane'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:4,
          character_name: 'Davos Seaworth'
          },
          {
          question1_response:true,
          question2_response: 5,
          question3_response: true,
          player_id:4,
          character_name: 'Daenerys Targaryen'
          },
          {
          question1_response:true,
          question2_response: 1,
          question3_response: false,
          player_id:4,
          character_name: 'Jorah Mormont'
          },
          {
          question1_response:true,
          question2_response: 4,
          question3_response: true,
          player_id:4,
          character_name: 'Missandrei'
          },
          {
          question1_response:true,
          question2_response: 4,
          question3_response: true,
          player_id:4,
          character_name: 'Grey Worm'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:4,
          character_name: 'Brienne of Tarth'
          },
          {
          question1_response:false,
          question2_response:null,
          question3_response: null,
          player_id:4,
          character_name: 'Podrick Payne'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:4,
          character_name: 'Varys'
          },
          {
          question1_response:true,
          question2_response: 3,
          question3_response: true,
          player_id:4,
          character_name: 'Samwell Tarly'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:4,
          character_name: 'Tyrion Lannister'
          },
          {
          question1_response:true,
          question2_response: 2,
          question3_response: false,
          player_id:4,
          character_name: 'Cersei Lannister'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:4,
          character_name: 'Jaime Lannister'
          },
          {
          question1_response:true,
          question2_response: 4,
          question3_response: true,
          player_id:4,
          character_name: 'Yara Greyjoy'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:4,
          character_name: 'Theon Greyjoy'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:4,
          character_name: 'Bronn'
          },
          {
          question1_response:true,
          question2_response: 3,
          question3_response: false,
          player_id:4,
          character_name: 'Gregor Clegane'
          },
          {
          question1_response:true,
          question2_response: 1,
          question3_response: false,
          player_id:4,
          character_name: 'Gendry'
          },
        {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:5,
          character_name: 'Jon Snow'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:5,
          character_name: 'Sansa Stark'
          },
          {
          question1_response:true,
          question2_response: 5,
          question3_response: false,
          player_id:5,
          character_name: 'Arya Stark'
          },
          {
          question1_response:true,
          question2_response: 3,
          question3_response: true,
          player_id:5,
          character_name: 'Bran Stark'
          },
          {
          question1_response:true,
          question2_response: 5,
          question3_response: true,
          player_id:5,
          character_name: 'Tormund Giantsbane'
          },
          {
          question1_response:true,
          question2_response: 2,
          question3_response: false,
          player_id:5,
          character_name: 'Beric Dondarrion'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:5,
          character_name: 'Sandor Clegane'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:5,
          character_name: 'Davos Seaworth'
          },
          {
          question1_response:true,
          question2_response: 6,
          question3_response: false,
          player_id:5,
          character_name: 'Daenerys Targaryen'
          },
          {
          question1_response:true,
          question2_response: 5,
          question3_response: true,
          player_id:5,
          character_name: 'Jorah Mormont'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:5,
          character_name: 'Missandrei'
          },
          {
          question1_response:true,
          question2_response: 6,
          question3_response: false,
          player_id:5,
          character_name: 'Grey Worm'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:5,
          character_name: 'Brienne of Tarth'
          },
          {
          question1_response:true,
          question2_response: 5,
          question3_response: false,
          player_id:5,
          character_name: 'Podrick Payne'
          },
          {
          question1_response:true,
          question2_response: 5,
          question3_response: false,
          player_id:5,
          character_name: 'Varys'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:5,
          character_name: 'Samwell Tarly'
          },
          {
          question1_response:true,
          question2_response: 6,
          question3_response: false,
          player_id:5,
          character_name: 'Tyrion Lannister'
          },
          {
          question1_response:true,
          question2_response: 6,
          question3_response: true,
          player_id:5,
          character_name: 'Cersei Lannister'
          },
          {
          question1_response:true,
          question2_response: 6,
          question3_response: false,
          player_id:5,
          character_name: 'Jaime Lannister'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:5,
          character_name: 'Yara Greyjoy'
          },
          {
          question1_response:true,
          question2_response: 5,
          question3_response: true,
          player_id:5,
          character_name: 'Theon Greyjoy'
          },
          {
          question1_response:false,
          question2_response: null,
          question3_response: null,
          player_id:5,
          character_name: 'Bronn'
          },
          {
          question1_response:true,
          question2_response: 2,
          question3_response: true,
          player_id:5,
          character_name: 'Gregor Clegane'
          },
          {
          question1_response:true,
          question2_response: 5,
          question3_response: false,
          player_id:5,
          character_name: 'Gendry'
          },
        
      ]);
    });
};
