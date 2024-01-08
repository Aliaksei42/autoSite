import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './SearchPage.module.css';
import Post from '../components/Post/Post';

const SearchPage = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3002/posts');
        setAllPosts(response.data);
      } catch (error) {
        console.error('Ошибка при получении постов:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3002/posts?search=${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Ошибка при выполнении поиска:', error);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchRow}>
        <div className={styles.searchLeft}>
          <h1>Все посты - за все времена</h1>
          <div className={styles.inputWithButton}>
            <input
              type="text"
              placeholder="Wpisz tekst do wyszukania"
              value={searchTerm}
              onChange={handleSearchChange}
              className={styles.input}
            />
            <button className={styles.inputButton} onClick={handleSearch}>
              Szukaj
            </button>
          </div>

          {searchTerm && (
            <ul>
              {searchResults.map((post) => (
                <div key={post.id} className={styles.search}>
                  <Post post={post} />
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
