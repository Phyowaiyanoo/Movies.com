import React from 'react'
import "../CSS/Nav.css"
import { NavLink } from 'react-router'
const Nav = () => {
  return (
    <div>
        <h1>Wellcome Our Movie Site</h1>
       
      <div className='Nav'>
           <NavLink to = "/">
          <button type='button'>Home</button>
         </NavLink>
        <NavLink to = "/About">
          <button type='button'>About</button>
        </NavLink>
       <NavLink to = "/Register">
         <button type='button'>Register</button>
       </NavLink>
      </div>
    </div>
  )
}

export default Nav
