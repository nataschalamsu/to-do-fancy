const routes = require('express').Router()
const { userSignUp, userSignIn, userSignInFb, userTask } = require('../controllers/user.controllers')


routes
  .post('/signup', userSignUp)
  .post('/signin', userSignIn)
  .get('/signinfb', userSignInFb)

module.exports = routes