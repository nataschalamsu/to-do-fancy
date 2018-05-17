const routes = require('express').Router()
const { getToDos, addTask, getTask, updateTask, deleteTask, getMyTask, getWeather } = require('../controllers/todo.controllers')
const {  checkLogin } = require('../middlewares/authentication')

routes
  .get('/', getToDos)
  .get('/weather', getWeather)
  .get('/mytask', checkLogin, getMyTask)
  .get('/:id', getTask)
  .post('/', checkLogin, addTask)
  .put('/:id', updateTask)
  .delete('/:id', deleteTask)
  
  

module.exports = routes