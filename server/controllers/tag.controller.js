const mongoose = require('mongoose')
const tag = require('../models/tag.models')

module.exports = {
  addTag: function(req, res) {
    const { tagName } = req.body
    const newTag = new tag ({ tagName })

    newTag
      .save(function(err, saved) {
        if (!err) {
          res
            .status(200)
            .json({
              message: 'tag saved'
            })
        } else {
          res
            .status(400)
            .json(err)
        }
      })
  },
  getAllTag: function(req, res) {
    tag
      .find()
      .exec()
      .then(tags => {
        res
          .status(200)
          .json({
            message: 'tag list',
            tagData: tags
          })
      })
      .catch(err => {
        res
          .status(400)
          .json(err)
      })
  },
  updateTag: function(req, res) {
    tag
      .findByIdAndUpdate({
        _id: req.params.id
      }, function(err, oneTag) {
        if (!err) {
          res
            .status(200)
            .json({
              message: 'tag updated',
              tagData: oneTag
            })
        }
      })
  },
  deleteTag: function(req, res) {
    tag
      .findByIdAndRemove({
        _id: req.params.id
      }, function(err, deleted) {
        if (!err) {
          res
            .status(200)
            .json({
              message: 'tag deleted'
            })
        }
      })
  },
  getTagByName: function(req, res) {
    let { name } = req.body
    console.log(name);
    
    tag
      .findOne({
        tagName: name
      }, function(err, result) {
        if (!err) {
          res
            .status(200)
            .json(result)
        } else {
          res
            .status(400)
            .json(err)
        }
      })
  }
}
