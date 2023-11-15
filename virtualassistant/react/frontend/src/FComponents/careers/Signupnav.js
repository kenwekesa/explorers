 import React from 'react'
import MainNav from '../navbar/navbar'
import "./Signupnav.css"

const Signupnav = () => {

    return (
    <div className='careerssignup'>
      <div className='maasignup'>
        <MainNav />
        </div>
        <div className='maasignupcontent'>
        <p>Get started <span className='spancolor1'>with the application</span> process</p>
        </div>
    </div>
  )
}

export default Signupnav