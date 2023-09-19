import React from 'react'
import MainNav from '../navbar/navbar'
import "./Loginnav.css"

const Loginnav = () => {

    return (
    <div className='mathelogin'>
      <div className='malogin'>
        <MainNav />
        </div>
        <div className='malogincontent'>
        <p>My <span className='spancolor1'>Account</span></p>
        </div>
    </div>
  )
}

export default Loginnav