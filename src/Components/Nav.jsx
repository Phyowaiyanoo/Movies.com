import React from 'react'
import { NavLink } from 'react-router-dom'
import "../CSS/Nav.css"
const Nav = () => {
  return (
    <div className='nav'> 
      <NavLink to = "/">
        <button type = "button">Home</button>
      </NavLink>
      <NavLink to = "/About">
        <button type = "button">About</button>
      </NavLink>
      <NavLink to = "/Register">
        <button type = "button">Register</button>
      </NavLink>
    </div>
  )
}

export default Nav
