const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/pracownicy'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('połączono...')
})

app.use(express.json())

const pracownikRouter = require('./routes/pracownicy')
app.use('/pracownicy', pracownikRouter)

app.listen(9000, () => {
    console.log('Serwer wstał')
})