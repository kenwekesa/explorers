import React from 'react'
import MainNav from '../navbar/navbar'
import "./Contactnav.css"

const Contactnav = () => {

    return (
    <div className='mathecontact'>
      <div className='macontact'>
        <MainNav />
        </div>
        <div className='macontactcontent'>
        <p>Get in <span className='spancolor1'>touch with our </span>team</p>
        </div>
    </div>
  )
}

export default Contactnav