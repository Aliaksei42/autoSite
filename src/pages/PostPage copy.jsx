// PostPage.js
// Импортируем React и необходимые компоненты
import { useParams } from 'react-router-dom'
import posts from '../data/posts' // Предполагается, что у вас есть файл с данными постов
import Post from '../components/Post/Post' // Предполагается, что у вас есть компонент Post
import NotFound from '../components/NotFound/NotFound' // Предполагается, что у вас есть компонент NotFound
import styles from './PostPage.module.css' // Импортируем стили для компонента PostPage

// Компонент PostPage
const PostPage = () => {
  // Используем хук useParams для получения параметра из URL
  const { postId } = useParams()

  // Найдем пост с помощью идентификатора postId
  const post = posts.find((p) => p.id === parseInt(postId, 10))


  
  // Если пост не найден, отобразим страницу NotFound
  if (!post) {
    return <NotFound />
  }

  
  
  return (
    <div className={styles.postPage}>
      <div className={styles.postContainer}>
        <img src={post.img} alt={post.title} className={styles.postPageImage} />
        <div className={styles.postPageTitle}>
          <h3>{post.title}</h3>
        </div>
        <div className={styles.postPageText}>{post.text}</div>
      </div>
    </div>
  )
}

// Экспортируем компонент PostPage
export default PostPage
