import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Post.module.css';

const Post = ({ post }) => {
  const { img, title, text, date } = post;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const formattedTitle = title || 'Untitled'; // Используем "Untitled", если title не определен

  const formattedText = isExpanded ? (
    <div dangerouslySetInnerHTML={{ __html: text }} />
  ) : (
    <div dangerouslySetInnerHTML={{ __html: text.slice(0, 100) + '...' }} />
  );

  return (
    <Link
      to={`/posts/${post.id}-${formattedTitle.replace(/\s+/g, '-')}`}
      className={styles.postLink}
      onClick={toggleExpand}
    >
      <div className={styles.post}>
        <img src={img} alt={formattedTitle} className={styles.postImage} />
        <div className={styles.postTitle}>
          <h3>{formattedTitle}</h3>
        </div>
        <div className={styles.postText}>{formattedText}</div>
        <h4>{date}</h4>
      </div>
    </Link>
  );
};

export default Post;
