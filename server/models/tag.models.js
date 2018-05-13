const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tagSchema = Schema(
  {
    tagName: {
      type: String,
      required: [true, 'tag name required']
    }
  },
  {
    timestamps: true
  }
)

let tag = mongoose.model('tag', tagSchema)

module.exports = tag