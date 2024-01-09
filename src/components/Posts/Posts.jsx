import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from '../Button/Button'
import Post from '../Post/Post'
import TopPost from '../TopPost/TopPost'
import SidebarPosts from '../SidebarPosts/SidebarPosts'


import topPosts from '../../data/topPosts'
import sidebarPosts from '../../data/sidebarPosts'
import styles from './Posts.module.css'

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);
  // Используем состояние для отслеживания количества видимых постов
  const [visiblePosts, setVisiblePosts] = useState(4) // Начинаем с отображения 4 постов

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Измените URL на ваш API на сервере
        const response = await axios.get('http://localhost:3002/posts');
        setAllPosts(response.data);
      } catch (error) {
        console.error('Ошибка при получении постов:', error);
      }
    };

    fetchPosts();
  }, []);

  // Обработчик для отображения большего количества постов
  const handleShowMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 4) // Увеличиваем количество отображаемых постов на 2
  }

  return (
    // Общий контейнер для постов
    <div className={styles.postsContainer}>
      <div className={styles.postsRow}>
        <div className={styles.postsLeft}>
          {/* Рендерим TopPost перед маппингом постов */}
          <TopPost topPost={topPosts[0]} />

          <div className={styles.posts}>
            {/* Маппим массив постов для их отображения */}
            {allPosts.slice(0, visiblePosts).map((post) => (
              <div key={post.slug} className={styles.posts}>
                {/* Передаем компоненту Post информацию о посте */}
                <Post key={post.slug} post={post} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.postsRight}>
          {/* Вместо передачи всех постов передаем только отфильтрованные */}
          <SidebarPosts sidebarPosts={sidebarPosts} />
        </div>
      </div>
      {/* Показываем кнопку "Показать ещё", если есть ещё посты для отображения */}
      {visiblePosts < allPosts.length && (
        <Button onClick={handleShowMore}>Show more</Button>
      )}
    </div>
  )
}

export default Posts
