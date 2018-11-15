const gamesModel = require('../models/gamesModels')

function create(req, res, next){
  const newGame = gamesModel.create(req.body)

  if(newGame.error) return next( { status: 400, message: newGame })
  
  res.status(201).send({ data: newGame })
}

function modify(req, res, next){
  const newGame = gamesModel.modify(req.params.gameId, req.body)

  if(newGame.error) return next( { status: 400, message: newGame })
  
  res.status(201).send({ data: newGame })
}

function readAll(req, res, next){
  const games = gamesModel.getAll()
  
  res.send({data: games})
}


function readOne(req, res, next){
  const game = gamesModel.getOne(req.params.gameId)

  if(!game) return next({status: 404, message: game })

  res.status(200).send(game)
}

function remove(req, res, next){
  const game = gamesModel.remove(req.params.gameId)

  if(!game) return next({status: 404, message: game })

  res.status(200).send(game)
}


module.exports = { create, readAll, readOne, remove, modify }