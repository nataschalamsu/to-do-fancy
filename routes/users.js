const routes = require('express').Router()
const { getAllUser, userSignUp, userSignIn, getUser, updateUser, deleteUser } = require('../controllers/user.controllers')

routes
  .get('/', getAllUser)
  .get('/:id', getUser)
  .post('/signup', userSignUp)
  .post('/signin', userSignIn)
  .put('/:id', updateUser)
  .delete('/:id', deleteUser)

module.exports = routes