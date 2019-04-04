const express = require(`express`)
const app = express()
const port = process.env.PORT || 3000
const knex = require('./knex')

app.get(`/`, function(req, res, next){
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

app.get('/ballot', function(req, res, next){
    return knex(' players')
        .join('responses', 'responses.player_id', 'players.id')
    .then((ballot) => {
        res.send(ballot)
    })
    .catch((err) => {
        next(err)
    })
})

app.post('/ballot/leagues/:id', function(req, res, next){
    knex('leagues').insert(req.body)
    .then((rows) => {
        res.send('Find your ballot on your league home page')
    })
    .catch((err) => {
        next(err)
    })
})

app.delete('/leagueName/:id', (req, res, next) => {
    knex('leagues')
    .where({ 'id' : req.params.id })
    .del()
    .then((leagueName) => {
        res.send("League Deleted");
    })
    .catch((err) => {
        next(err);
    });
})

app.listen(port, function(){
    console.log(`listening on port ${port}`)
})
