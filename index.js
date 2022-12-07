const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const config=require('./config/database')
const users=require('./Routes/users')
const fetch=require("node-fetch")
//mongoose.Promise=global.Promise;  
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/users',users)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})