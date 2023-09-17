import React from 'react'
import Customer from './Smallcards/customer'
import Social from './Smallcards/social'
import Admin from './Smallcards/admin'
import Data from './Smallcards/data'
import Content from './Smallcards/content'
import "./Pourservices.css"



const Pourservices = () => {
  return (
    <div className='Pour'>
      <div className='Pours'>
        <p>Our <span className='spancolor1'>Services</span></p>
      </div>

      <div>
        <div className='Pserv'>
          <Customer/>
          <Social/>
        </div>
        <div className='Pserv'>
          <Admin/>
          <Data/>
        </div>
      </div>
    </div>
  )
}

export default Pourservices