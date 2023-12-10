import React, { useState } from 'react'
import Button from '../Button/Button'
import Post from '../Post/Post'
import TopPost from '../TopPost/TopPost'
import SidebarPosts from '../SidebarPosts/SidebarPosts'


import topPosts from '../../data/topPosts'
import posts from '../../data/posts'
import sidebarPosts from '../../data/sidebarPosts'

import styles from './Posts.module.css'

const Posts = () => {
  // Используем состояние для отслеживания количества видимых постов
  const [visiblePosts, setVisiblePosts] = useState(4) // Начинаем с отображения 4 постов
  

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
            {posts.slice(0, visiblePosts).map((post) => (
              <div key={post.id} className={styles.posts}>
                {/* Передаем компоненту Post информацию о посте */}
                <Post post={post} />
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
      {visiblePosts < posts.length && (
        <Button onClick={handleShowMore}>Show more</Button>
      )}
    </div>
  )
}

export default Posts
