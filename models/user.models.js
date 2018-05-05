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
      required: [true, 'email required']
    }, 
    password: {
      type: String,
      required: [true, 'password required']
    }

  },

  {
    timestamps: true
  }

)

let user = mongoose.model('user', usersSchema)

module.exports = user