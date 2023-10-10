import React from 'react'
import add from "../../../images/vmainpage.jpg"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
     <pan className="logo">Let's chat</pan> 
     <div className='user'>
        <img src={add} alt="" />  
        <span>John</span>
        <button>logout</button>      
      </div>    
    </div>
  )
}

export default Navbar