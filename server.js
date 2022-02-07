const express = require('express')
const app = express()


require('dotenv').config({path: '.env'})
// this alternative also works 
// const env = require('dotenv')
// env.config({path: '.env'})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT)