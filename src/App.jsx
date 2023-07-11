import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Blog from './pages/Blog'
import Article from './pages/Article'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/artikel" element={<Article/>} />
    </Routes>
  )
}

export default App