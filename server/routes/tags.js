const routes = require('express').Router()
const { addTag, getAllTag, updateTag, deleteTag } = require('../controllers/tag.controller')

routes
  .get('/', getAllTag)
  .post('/', addTag)
  .put('/:id', updateTag)
  .delete('/:id', deleteTag)

module.exports = routes