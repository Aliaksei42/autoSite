import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Posts from '../components/Posts/Posts'

const Home = () => {
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Измените URL на ваше API на сервере
        const response = await axios.get('http://localhost:3002/posts')
        setAllPosts(response.data)
      } catch (error) {
        console.error('Ошибка при получении постов:', error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div>
      <Posts allPosts={allPosts} />
    </div>
  )
}

export default Home
