const routes = require('express').Router()
const { addTag, getAllTag, updateTag, deleteTag, getTagByName } = require('../controllers/tag.controller')

routes
  .get('/', getAllTag)
  .post('/', addTag)
  .post('/one', getTagByName)
  .put('/:id', updateTag)
  .delete('/:id', deleteTag)

module.exports = routes