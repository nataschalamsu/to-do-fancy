require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose');
const todos = require('./routes/todo')
const users = require('./routes/users')


const db = mongoose.connection
mongoose.connect('mongodb://localhost/library');


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('***** ::mongoose connected:: *****');
});


app.get('/', (req, res) => {
  res.send('mongoose CRUD')
})


app.use('/todos', todos )
app.use('/users', users )


app.listen(3000, (connect => {
  console.log('*** :) ==================connected======================== (: ***')
}))