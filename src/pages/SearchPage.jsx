import React, { useState, useEffect } from 'react';
import posts from '../data/posts.js';
import styles from './SearchPage.module.css';
import Post from '../components/Post/Post';
import UserList from '../components/UserList/UserList.jsx';

const SearchPage = () => {
  // Состояния компонента
  const [searchPage, setSearchPage] = useState(posts); // Состояние для хранения всех постов
  const [searchTerm, setSearchTerm] = useState(''); // Состояние для хранения строки поиска
  const [searchResults, setSearchResults] = useState([]); // Состояние для хранения отфильтрованных результатов поиска

  // Эффект, выполняющийся при изменении searchTerm или searchPage
  useEffect(() => {
    // Функция для сортировки постов по дате
    const sortByDate = (a, b) => new Date(b.date) - new Date(a.date);

    // Фильтрация постов, если searchTerm не пустой
    const filteredsearchPage = searchTerm
      ? searchPage
          .filter(
            (post) =>
              post.title.toLowerCase().includes(searchTerm.toLowerCase()) || // Поиск в заголовке
              post.text.toLowerCase().includes(searchTerm.toLowerCase())   // Поиск в тексте
          )
          .sort(sortByDate) // Сортировка отфильтрованных постов по дате
      : [];

    // Обновление состояния searchResults
    setSearchResults(filteredsearchPage);
  }, [searchTerm, searchPage]); // Зависимости эффекта - searchTerm и searchPage

  // Обработчик изменения строки поиска
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.searchContainer}>
    <div className={styles.searchRow}>
      <div className={styles.searchLeft}>
      {/* Заголовок страницы */}
      <h1>Все посты - за все времена</h1>

      {/* Ввод текста для поиска с кнопкой */}
      <div className={styles.inputWithButton}>
        <input
          type="text"
          placeholder="Wpisz tekst do wyszukania"
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.input}
        />
        <button className={styles.inputButton}>
          Szukaj
        </button>
      </div>

      {/* Вывод результатов поиска, если searchTerm не пустой */}
      {searchTerm && (
        <ul>
          {/* Маппинг отфильтрованных постов для вывода */}
          {searchResults.map((post) => (
              <div key={post.id} className={styles.search}>
              {/* Передаем компоненту Post информацию о посте */}
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
