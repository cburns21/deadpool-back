const express = require(`express`)
const app = express()
const port = process.env.PORT || 3000
const knex = require('./knex')

app.get(`/`, function (req, res, next) {
    res.send(`hello world`)
})

app.post('/leagues', (req, res, next) => {
    knex('leagues').insert(req.body)
        .then((leagueName) => {
            res.send("League Created");
        })
        .catch((err) => {
            next(err);
        });
})

app.post('/ballot', function (req, res, next) {
    return knex(' players')
        .join('responses', 'responses.player_id', 'players.id')
        .then((ballot) => {
            res.send(ballot)
        })
        .catch((err) => {
            next(err)
        })
})

app.post('/ballot1', function (req, res, next) {
    knex(' players')
        .then((ballot) => {
            res.send('Ballot Submitted')
        })
        .catch((err) => {
            next(err)
        })
})

app.post('/ballot2', function (req, res, next) {
    const result = {}
    knex('responses')
        .then((ballot) => {
            res.send('Ballot Submitted')
        })
        .catch((err) => {
            next(err)
        })
})

app.get('/leagues/:name', function (req, res, next) {
    const result = {}
    const leagueName = req.params.name
    knex('leagues').where({ 'name': leagueName }).first()
        .then(league => {
            result.leagueInfo = league
            return knex('players')
                .where({ 'team_id': league.id })
        })
        .then(players => {
            const playersResponse = players.map(player => {
               return knex('responses').where({'player_id': player.id})
                .then(responses => {
                    player.responses = responses
                    return player
                })
                console.log(player)
            })
            result.allPlayers = playersResponse 
            return Promise.all(playersResponse)
        }) .then(mapResult => {
            res.send(result)
        })

})



// app.post('/ballot/leagues', function(req, res, next){
//     knex('leagues').insert(req.body)
//     .then((rows) => {
//         res.send('Find your ballot on your league home page')
//     })
//     .catch((err) => {
//         next(err)
//     })
// })

app.delete('/leagueName/:id', (req, res, next) => {
    knex('leagues')
        .where({ 'id': req.params.id })
        .del()
        .then((leagueName) => {
            res.send("League Deleted");
        })
        .catch((err) => {
            next(err);
        });
})

app.listen(port, function () {
    console.log(`listening on port ${port}`)
})
