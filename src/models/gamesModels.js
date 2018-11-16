const games = require('../db/gamesData.js')
const uuid = require('uuid')

function create(newGame) {
  const error = []
  const {
    name,
    character,
    genre
  } = newGame

  if (!name) {
    error.push('Please Provide Info To Create')
  }
  if (typeof name !== "string") {
    error.push('Value needs to be a string!')
  }

  if (error.length) return {
    error
  }

  const game = {
    id: uuid(),
    name,
    character,
    genre
  }
  games.push(game)
  return game
}

function modify(gameId, newGame) {
  const error = []
  const gameidx = games.findIndex(ele => ele.id === gameId)
    if (gameidx === -1) {
    error.push('Not Found')}

  const {
    name,
    character,
    genre
  } = newGame

  const game = {
    id: gameId,
    name,
    character,
    genre
  }

  if (!name && !character && !genre) {
    error.push("Please fill in all values")
  }
  if (error.length) return {
    error
  }

  games[gameidx] = game
  return game
}

function getAll() {
  return games
}

function getOne(gameId) {

  const game = games.find(ele => ele.id === gameId)

  if (!game) {
    return {
      error: ['game not found']
    }
  }

  return game
}

function remove(gameId) {
  const gameidx = games.findIndex(ele => ele.id === gameId)

  if (gameidx === -1) return {
    error: ['Not Found']
  }

  const savedGame = games[gameidx]

  games.splice(gameidx, 1)

  return savedGame
}


module.exports = {
  create,
  getAll,
  getOne,
  remove,
  modify
}