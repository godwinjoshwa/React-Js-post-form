const express = require('express');
const app = express();
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

app.use(express.json())

app.use(cors());

app.use(morgan('dev'))

const addUser = require('./routers/Users')
app.use('/', addUser)

mongoose.connect('mongodb://localhost:27017/KryptonID', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('DB connection successfully')
});

app.listen(4500, () => {
    console.log('Server running 4500')
})

