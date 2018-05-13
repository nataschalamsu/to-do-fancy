const routes = require('express').Router()
const { getToDos, addTask, getTask, updateTask, deleteTask, getMyTask } = require('../controllers/todo.controllers')
const {  checkLogin } = require('../middlewares/authentication')

routes
  .get('/', getToDos)
  .get('/:id', getTask)
  .post('/', checkLogin, addTask)
  .put('/:id', updateTask)
  .delete('/:id', deleteTask)
  .get('/mytask', checkLogin, getMyTask)

module.exports = routes