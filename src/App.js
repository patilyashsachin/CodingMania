import React from 'react'
import Home from './Home'
import Courses from './Courses'
import Blog from './Blog'
import Login from './Login'
import Signup from './Signup'
import Contact from './Contact'
import About from './About'
import Register from './Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Signup/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Courses" element={<Courses/>}/>
          <Route path="/ExploreBlog" element={<Blog/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
