// const express = require('express')
// const { connectToDb, getDb } = require('./db')

const PORT = 3000

const app = express()

let db

connectToDb((err) => {
  if (!err) {
    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`Listen port ${PORT}`)
    })
    db = getDb()
   // проверка содержимого постов
    db.collection('posts')
      .find()
      .toArray()
      .then((result) => {
        console.log('Contents of "posts" collection:', result);
      })
      .catch((err) => {
        console.error('Error retrieving data from "posts" collection:', err);
      });
  } else {
    console.log(`DB connection error: ${err}`);
  }
});

app.get('/posts', (req, res) => {
  const posts = []
console.log(posts)
  db.collection('posts')
    .find() //cursor - hasNext, next, forEach
    .sort({ title: 1 }) // Сортируем результаты по полю title в порядке возрастания
    .forEach((post) => posts.push(post)) // Используем forEach для итерации по курсору и добавления каждого поста в массив posts
    .then(() => {
      // После завершения итерации, отправляем массив постов в формате JSON в ответ на запрос
      res.status(200).json(posts);
    })
    .catch((err) => {
      // Если произошла ошибка при выполнении запроса к базе данных, выведем ее в консоль и отправим клиенту сообщение об ошибке
      console.error(err);
      res.status(500).json({ error: 'Something went wrong...' });
    });
});