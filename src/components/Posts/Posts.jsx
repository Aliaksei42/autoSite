// Posts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../Button/Button';
import Post from '../Post/Post';
import TopPost from '../TopPost/TopPost';
import SidebarPosts from '../SidebarPosts/SidebarPosts';
import styles from './Posts.module.css';

const Posts = ({ category }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(4);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3002/posts');
        const filteredPosts = category
          ? response.data.filter(post => post.category === category)
          : response.data;

        setAllPosts(filteredPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [category]);

  const handleShowMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 4);
  };

  return (
    <div className={styles.postsContainer}>
      <div className={styles.postsRow}>
        <div className={styles.postsLeft}>
          <TopPost topPost={allPosts[0]} />

          <div className={styles.posts}>
            {allPosts.slice(1, visiblePosts).map((post) => (
              <div key={post.slug} className={styles.posts}>
                <Post key={post.slug} post={post} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.postsRight}>
          <SidebarPosts sidebarPosts={allPosts.slice(1)} />
        </div>
      </div>
      {visiblePosts < allPosts.length && (
        <Button onClick={handleShowMore}>Show more</Button>
      )}
    </div>
  );
};

export default Posts;
