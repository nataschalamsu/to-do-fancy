const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'name required']
    }, 
    email: {
      type: String,
      required: [true, 'email required'],
	    unique: [true, 'email already exists'],
	    validate: {
        validator: function(email) {
          let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
          let isEmail = emailRegex.test(email)
          return isEmail
        }
      }
    }, 
    password: {
      type: String,
      min: [10, 'minimal password 10'],
      required: [true, 'password required']
    }
  },
  {
    timestamps: true
  }
)

let user = mongoose.model('user', usersSchema)

module.exports = user
