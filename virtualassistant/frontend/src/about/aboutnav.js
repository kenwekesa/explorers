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
        <p>We present top <span className='spancolor1'>professional and passionate <br></br> 
        virtual </span>assistants</p>
        </div>
    </div>
  )
}

export default AboutNav