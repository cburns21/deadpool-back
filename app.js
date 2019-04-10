const express = require(`express`)
const app = express()
const port = process.env.PORT || 3000
const knex = require('./knex')
var cors = require('cors')
var bodyParser = require('body-parser');
const dotenv = require('dotenv').config()

app.use(cors())
app.use(bodyParser.json());

app.get(`/`, function (req, res, next) {
    res.send(`hello world`)
})

app.get('/leagues', (req, res, next) => {
    knex('leagues')
        .then((leagues) => {
            res.send(leagues)
        })
        .catch((err) => {
            next(err)
        })
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

app.get('/players/:league', (req, res, next) => {
    const result = {}
    knex('leagues')
    .where({'leagues.name': req.params.league})
    .join('players', 'players.team_id', 'leagues.id')
    .select('leagues.id', 'players.name')
        .then((league) => res.send(league))

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
                return knex('responses').where({ 'player_id': player.id })
                    .then(responses => {
                        player.responses = responses
                        return player
                    })
            })
            result.allPlayers = playersResponse
            return Promise.all(playersResponse)
        }).then(mapResult => {
            res.send(result)
        })

})


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
