const mongoose = require('mongoose')
const user = require('../models/user.models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

module.exports = {
  getAllUser: (req, res) => {
    user
      .find()
      .exec()
      .then(users => {
        res
          .status(200)
          .send({
            message: 'showing user list',
            userData: users
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
  
  userSignUp: (req, res) => {
    let {
      name, 
      email, 
      password
    } = req.body

    let hashed = bcrypt.hashSync(password, bcrypt.genSaltSync())
    password = hashed

    let newTask = new user({ 
      name, 
      email, 
      password 
    })

    newTask
      .save((err, result) => {
      if(err) {
        res
          .status(400)
          .send({
            message: err
          })
      } else {
        res
          .status(201)
          .send({
            newData: result
          })
      }
    })
  },

  userSignIn: (req, res) => {
    const { email, password } = req.body
    user
      .findOne({
        email: email
      }, (err, userLogin) => {
        if (err) {
          res
            .status(500)
            .send({
              message: err
            })
        } else {
          if (bcrypt.compareSync(password, userLogin.password)) {
            let token = jwt.sign({
                        userId: userLogin.id,
                        userEmail: userLogin.email,
                        userName: userLogin.name
                    }, process.env.SECRET)
            res
              .status(200)
              .send({
                message: 'login success',
                nowLogin: userLogin,
                token
              })
          }
        }
      })
  },
  
  getUser: (req, res) => {
    user
      .findById({
      id: req.params.id
    }, (err, book) => {
      if(err) {
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

  updateUser: (req, res) => {
    const {
      full_name, 
      email, 
      password
    } = req.body

    user
      .findByIdAndUpdate({
        id: req.params.id
      }, req.body, (err, updated) => {
        if(err) {
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

  deleteUser: (req, res) => {
    user
      .findByIdAndRemove(req.params.id, (err, deleted) => {
      if(err) {
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
  }
}