// src/pages/Events.js
import React, { useEffect, useState } from 'react';
import Post from '../components/Post/Post'

const Events = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Функция для загрузки данных о постах с сервера
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3000/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    // Вызываем функцию загрузки данных при монтировании компонента
    fetchPosts();
  }, []); // Пустой массив зависимостей гарантирует, что useEffect вызовется только один раз при монтировании компонента

  return (
    <div>
      <h1>Список постов</h1>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Events;
