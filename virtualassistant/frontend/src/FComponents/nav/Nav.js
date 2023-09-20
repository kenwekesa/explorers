import React from 'react'
import MainNav from '../navbar/navbar'
import "./nav.css"

function Nav() {
    return (
    <div className='thenav'>
      <div className='nav'>
        <MainNav />
        </div>
        <div className='navcontent'>
        {/* <p>Hire best <span className='spancolor1'>professional virtual</span> assistants </p> 
          <p>at negotiated prices</p> */}
          <p>Hire best <span className='spancolor1'>professional virtual </span>assistants<br></br> 
           at negotiated prices</p>
        </div>
    </div>
  )
}

export default Nav