// Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from '../components/Posts/Posts';

const Home = () => {
  // const [homePosts, setHomePosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3002/posts');
        
  //       // Filter posts with the specific category 'Home'
  //       const homeFilteredPosts = response.data.filter(post => post.category === 'Home');
    
  //       setHomePosts(homeFilteredPosts);
  //     } catch (error) {
  //       console.error('Ошибка при получении постов:', error);
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  return (
    <div>
      <Posts category="Home" />
    </div>
  );
};

export default Home;
