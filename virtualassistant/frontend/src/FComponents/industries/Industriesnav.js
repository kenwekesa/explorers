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
        <p>We serve a variety of <span className='spancolor1'>industries </span></p>
        </div>
    </div>
  )
}

export default Industriesnav