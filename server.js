const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost/autoSite', { useNewUrlParser: true, useUnifiedTopology: true });

const Post = require('./models/post'); // Импортируйте модель поста

app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// Роут для получения всех постов
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
