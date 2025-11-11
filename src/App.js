import React from 'react'
import Home from './Component/Home'
import Nav from './Component/Nav'
import About from './Component/About'
import Register from './Component/Register'
import Notfound from './Component/Notfound'
import Video from "./Component/Video"
import { Route, Routes } from 'react-router-dom'
import Details from './Component/Details'
import "./App.css"
const App = () => {
  return (
    <div>
      <h1><span>Movies.com</span></h1>
      <Nav/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Details/:id'element={<Details/>}/>
        <Route path= '/Video/:id' element={<Video/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </div>
  )
}

export default App
