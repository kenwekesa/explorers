import React from 'react'
import MainNav from '../navbar/navbar'
import "./industriesnav.css"

const Industriesnav = () => {

    return (
    <div className='matheindustry'>
      <div className='maindustry'>
        <MainNav />
        </div>
        <div className='maindustrycontent'>
        <p>We present top <span className='spancolor1'>professional and passionate <br></br> 
        virtual </span>assistants</p>
        </div>
    </div>
  )
}

export default Industriesnav