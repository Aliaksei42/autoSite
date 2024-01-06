const express = require('express')
const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')


const PORT = 3000
const URL = 'mongodb://localhost:27017/autoSite'

const app = express()
app.use(express.json())

mongoose
.connect(URL)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(`DB connection error: ${err}`))

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listen port ${PORT}`)
})
let db

const handleError = (res, error) => {
  res.status(500).json({ error })
}

app.get('/posts', (req, res) => {
  const posts = []
  db.collection('posts')
    .find() // cursor - hasNext, next, forEach
    .sort({ title: 1 })
    .forEach((post) => posts.push(post))
    .then(() => {
      res.status(200).json(posts)
    })
    .catch(() => handleError(res, 'Something goes wrong...'))
})

app.get('/posts/:id', (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection('posts')
      .findOne({ _id: new ObjectId(req.params.id) }) // cursor - hasNext, next, forEach
      .then((doc) => {
        res.status(200).json(doc)
      })
      .catch(() => handleError(res, 'Something goes wrong...'))
  } else {
    handleError(res, 'Wrong id')
  }
})

app.delete('/posts/:id', (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection('posts')
      .deleteOne({ _id: ObjectId(req.params.id) }) // cursor - hasNext, next, forEach
      .then((result) => {
        res.status(200).json(result)
      })
      .catch(() => handleError(res, 'Something goes wrong...'))
  } else {
    handleError(res, 'Wrong id')
  }
})

app.post('/posts', (req, res) => {
  db.collection('posts')
    .insertOne(req.body) // cursor - hasNext, next, forEach
    .then((result) => {
      res.status(201).json(result)
    })
    .catch(() => handleError(res, 'Something goes wrong...'))
})

app.patch('/posts/:id', (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection('posts')
      .updateOne({ _id:new ObjectId(req.params.id) }, { $set: req.body}) // cursor - hasNext, next, forEach
      .then((result) => {
        res.status(200).json(result)
      })
      .catch(() => handleError(res, 'Something goes wrong...'))
  } else {
    handleError(res, 'Wrong id')
  }
})