import React from 'react'
import Nav from './Components/Nav'
import Home from './Components/Home'
import { Route, Routes } from 'react-router'
import About from './Components/About'
import Details from './Components/Details'
import NotFoundPage from './Components/NotFoundPage'
import Register from './Components/Register'
import Video from './Components/Video'


const App = () => {
  return (
    <div>
      <Nav/>
      
     

      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path ="/About" element={<About/>}/>
        <Route path = "/Details/:id" element={<Details/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/Video/:id' element={<Video/>}/>
        <Route path = "*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  )
}

export default App
