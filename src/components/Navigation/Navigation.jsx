// src/components/Navigation.js
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const location = useLocation(); // Hook для получения текущего пути страницы

  return (
    <div className={styles.NavigationSticky}>
      <nav className={styles.nav}>
        <NavLink to="/" exact className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}>
          Home
        </NavLink>
        <NavLink to="/news" className={`${styles.navLink} ${location.pathname === '/news' ? styles.active : ''}`}>
          News
        </NavLink>
        <NavLink to="/events" className={`${styles.navLink} ${location.pathname === '/events' ? styles.active : ''}`}>
          Events
        </NavLink>
        <NavLink to="/trends" className={`${styles.navLink} ${location.pathname === '/trends' ? styles.active : ''}`}>
          Trends
        </NavLink>
        <NavLink to="/gallery" className={`${styles.navLink} ${location.pathname === '/gallery' ? styles.active : ''}`}>
          Gallery
        </NavLink>
        <NavLink to="/interesting" className={`${styles.navLink} ${location.pathname === '/interesting' ? styles.active : ''}`}>
          Interesting
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
