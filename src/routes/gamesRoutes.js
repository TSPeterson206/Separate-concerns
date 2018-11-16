const express = require('express')
const gamesController = require('../controllers/gamesControllers')
const router = express.Router()

router.post('/', gamesController.create)
router.get('/', gamesController.readAll)
router.get('/:gameId', gamesController.readOne)
router.delete('/:gameId', gamesController.remove)
router.put('/:gameId', gamesController.modify)

module.exports = router


