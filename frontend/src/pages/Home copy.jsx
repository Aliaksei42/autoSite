// Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from '../components/Posts/Posts';

const Home = () => {

  return (
    <div>
      <Posts category="Home" />
    </div>
  );
};

export default Home;