// PostPage.js
// Импортируем React и необходимые компоненты
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import Post from '../components/Post/Post' // Предполагается, что у вас есть компонент Post
import NotFound from '../components/NotFound/NotFound' // Предполагается, что у вас есть компонент NotFound
import styles from './PostPage.module.css' // Импортируем стили для компонента PostPage

// Компонент PostPage
const PostPage = () => {
  // Используем хук useParams для получения параметра из URL
  const { postId } = useParams()



  const [selectedPost, setSelectedPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!postId) {
          setError('Error fetching post: Slug is undefined');
          return;
        }

        const response = await axios.get(`http://localhost:3002/posts/${postId}`);

        if (response.data) {
          const matchingPost = response.data;
          setSelectedPost(matchingPost);
        } else {
          setError('Error fetching post: Empty response data');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setError('Error fetching post: Something went wrong');
      }
    };

    fetchData();
  }, [postId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!selectedPost) {
    return <h3>Loading...</h3>;
  }

  const { img, title, text } = selectedPost;
  const postUrl = `http://localhost:3000/posts/${postId}`;

  const formattedText = text.split('\n').map((paragraph, index) => (
    // Используем dangerouslySetInnerHTML для выделения нужных частей текста
    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
  ));


  return (
    <div className={styles.postPage}>
      <div className={styles.postContainer}>
        <img src={img} alt={title} className={styles.postPageImage} />
        <div className={styles.postPageTitle}>
          <h3>{title}</h3>
        </div>
        <div className={styles.postPageText}>{text}</div>
      </div>
    </div>
  )
}

// Экспортируем компонент PostPage
export default PostPage
