import React from 'react'
import MainNav from '../navbar/navbar'
import "./aboutnav.css"

function AboutNav() {
    return (
    <div className='matheabout'>
      <div className='maabout'>
        <MainNav />
        </div>
        <div className='maaboutcontent'>
        <p>We provide you with top <span className='spancolor1'>professional and<br></br> passionate  
        virtual </span>assistants</p>
        </div>
    </div>
  )
}

export default AboutNav