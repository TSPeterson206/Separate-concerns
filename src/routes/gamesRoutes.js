const express = require('express')
const gamesController = require('../controllers/gamesControllers')
const router = express.Router()

const uuid = require('uuid/v4')
const index = require('../utils/index')
const games = require('../db/gamesData')


//if (process.env.NODE_ENV !== 'test')

router.post('/', gamesController.create)
router.get('/', gamesController.readAll)
router.get('/:gameId', gamesController.readOne)
router.delete('/:gameId', gamesController.remove)
router.put('/:gameId', gamesController.modify)

module.exports = router


//functions
// function isGamePresent(id) {
//     return function (thing) {
//         return thing.id === id;
//     }
// }

// function isNamePresent(name) {
//     return function (thing) {
//         return thing.name === name;
//     }
// }

// //////
// app.get('/games', (req, res) => {
//     res.send(games)
// })

// app.get('/games/:id', (req, res) => {
//     const isItThere = games.find(isGamePresent(req.params.id))
//     if (!isItThere) {
//         res.status(400).send({
//             error: {
//                 message: 'Not Found'
//             }
//         })
//     }
//     res.send(isItThere)
// })

// app.post('/games', (req, res) => {
//     if (!req.body.name) {
//         return res.status(400).send({
//             error: {
//                 message: 'Provide name'
//             }
//         })
//     }
//     const sureItsThere = games.find(isNamePresent(req.body.name))

//     if (sureItsThere) {
//         return res.status(400).send({
//             status: 400,
//             error: {
//                 message: 'Not Found'
//             }
//         })
//     }
//     const newGame = {
//         name: req.body.name,
//         id: uuid()
//     }

//     games.push(newGame)
//     res.status(201).send.apply(newGame)

// })

// app.put('/games/:id', (req, res) => {
//     const isItThere = games.find(isGameresent(req.params.id))
//     if (!isItThere) {
//         res.status(404).send({
//             error: {
//                 message: 'Not Found'
//             }
//         })
//     }
//     isItThere.name = req.body.name
//     res.send(isItThere)
// })

// app.delete('/games/:id', (req, res) => {
//     const isItThere = games.find(isGameresent(req.params.id))
//     if (!isItThere) {
//         res.status(404).send({
//             error: {
//                 message: 'Not Found'
//             }
//         })
//     }
//     let elementPos = games.map(function (x) {
//         return x.id;
//     }).indexOf(req.params.id);
//     var objectFound = games[elementPos];
//     let thisOtherOne = games.splice(objectFound, 1)
//     res.status(200).send(thisOtherOne)
// })