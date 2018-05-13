const mongoose = require('mongoose')
const todo = require('../models/todo.models')

module.exports = {
  getToDos: (req, res) => {
    todo
      .find()
      .populate('user', 'name')
      .populate('tag', 'tagName')
      .exec()
      .then(todos => {
        res
          .status(200)
          .send({
            message: 'your todos',
            todoList: todos
          })
      })
      .catch(err => {
        res
          .status(400)
          .send({
            message: err
          })
      })
  },
  
  addTask: (req, res) => {
    const {task, tag} = req.body

    let newTask = new todo({user: req.headers.signin, task, tag})
    
    newTask
      .save((err, result) => {
      if(err) {
        res
          .status(400)
          .send(err)
      } else {
        res
          .status(201)
          .send({
            newData: result
          })
      }
    })
  },
  
  getTask: (req, res) => {
    todo
      .findById({
      _id: req.params.id
    }, (err, book) => {
      if (err) {
        res
          .status(500)
          .send({
          message: err
        })
      } else {
        res
          .status(200)
          .send(book)
      }
    })
  },

  updateTask: (req, res) => {
    const {task, tag} = req.body
    todo
      .findByIdAndUpdate({
        _id: req.params.id
      }, req.body, (err, updated) => {
        if (err) {
          res
            .status(500)
            .send({
              message: err
            })
        } else {
          res
            .status(200)
            .send({
              message: 'update success'
            })
        }
      })
  },

  deleteTask: (req, res) => {
    todo
      .findByIdAndRemove(req.params.id, (err, deleted) => {
      if (err) {
        res
          .status(500)
          .send({
            message: err
          })
      } else {
        res
          .status(200)
          .send({
            message: 'deleted success'
          })
      }
    })
  },
  getMyTask: function(req, res) {
    todo
      .find()
      .exec()
      .then(todos => {
        res
          .status(200)
          .json({
            message: "your todo",
            todoList: todos
          })
      })
      .catch(err => {
        res
          .status(400)
          .json(err)
      })
  }
}