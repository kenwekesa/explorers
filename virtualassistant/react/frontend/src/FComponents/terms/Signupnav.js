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
        <p>Our <span className='spancolor1'>Terms and </span>Privacy Policy</p>
        </div>
    </div>
  )
}

export default Signupnav