const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    task: {
      type: String,
      required: [true, 'task required']
    },
    tag: {
      type: Schema.Types.ObjectId,
      ref: 'tag'
    }
  },
  {
    timestamps: true
  }
)

let todo = mongoose.model('todo', todoSchema)

module.exports = todo