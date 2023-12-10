// TopPost.js
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './TopPost.module.css';

const TopPost = ({ topPost }) => {
  const { id, img, title, text, date } = topPost; // Добавлено id
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Link
      to={`/posts/${id}-${title.replace(/\s+/g, '-')}`}
      className={styles.topPostLink}
      onClick={toggleExpand}
    >
      <div className={styles.topPost}>
        <img src={img} alt={title} className={styles.topPostImage} />
        <div className={styles.topPostTitle}>
          <h3>{title}</h3>
        </div>
        <div className={styles.topPostText}>
          {isExpanded ? text : `${text.slice(0, 100)}...`}
        </div>
        <h4>{date}</h4>
      </div>
    </Link>
  );
};

export default TopPost;
