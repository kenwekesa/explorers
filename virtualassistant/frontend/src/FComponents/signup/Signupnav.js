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
        <p>Get Started <span className='spancolor1'>with the Hiring</span> Process</p>
        </div>
    </div>
  )
}

export default Signupnav