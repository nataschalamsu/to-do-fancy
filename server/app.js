require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose');
const todos = require('./routes/todo')
const users = require('./routes/users')
const tags = require('./routes/tags')
const db = mongoose.connection
const cors = require('cors')


mongoose.connect('mongodb://admin:admin@ds117540.mlab.com:17540/nl15');

app.use(cors())
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
app.use('/tags', tags )


app.listen(3000, (connect => {
  console.log('*** :) ==================connected======================== (: ***')
}))