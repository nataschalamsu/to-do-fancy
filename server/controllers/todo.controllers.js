const mongoose = require('mongoose')
const todo = require('../models/todo.models')
const axios =require('axios')
const jwt = require('jsonwebtoken')

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
  getWeather: function(req, res)  {
    axios
      .get('http://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=bc8acfa8f52dbc5fee477318284b9856')
      .then(response => {
        let loc = response.data.name
        let weather = response.data.weather[0].main
	      let icon = response.data.weather[0].icon
        console.log(response.data.weather[0].icon);
        res
          .status(200)
          .json({
            location: loc,
            currentWeather: weather,
	          icons: icon
          })
      })
      .catch(err => {
        console.log(err)
        res
          .status(400)
          .send(err)
      })
  },
  getMyTask: function (req, res) {
    let token = req.headers.token

    jwt.verify(token, 'rahasia', function(err, decoded) {
      console.log(decoded)
      todo
        .find({user: decoded.userId})
        .populate('user', 'name')
        .populate('tag', 'tagName')
        .exec()
        .then(result => {
          res
            .status(200)
            .json(result)
        })
        .catch(err => {
          res
            .status(400)
            .json(err)
        })
      
    })
    
  }
}
