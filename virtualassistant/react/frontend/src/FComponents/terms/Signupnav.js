 import React from 'react'
import MainNav from '../navbar/navbar'
import "./Signupnav.css"

const Signupnav = () => {

    return (
    <div className='mathsignup'>
      <div className='maasignup'>
        <MainNav />
        </div>
        <div className='maasignupcontent'>
        <p>Our <span className='spancolor1'>Privacy and</span>Terms</p>
        </div>
    </div>
  )
}

export default Signupnav