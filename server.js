const express = require('express')
const mongoose = require('mongoose')
// server.js
const Post = require('./models/post')
const postRoutes = require('./routes/post-routes')

const PORT = 3000
const URL = 'mongodb+srv://alex:Passs321@cluster0.tq2r9lo.mongodb.net/autoSite?retryWrites=true&w=majority'
// const URL = 'mongodb://localhost:27017/autoSite'

const app = express()
app.use(express.json())
app.use(postRoutes)

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`))

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listen port ${PORT}`)
})




