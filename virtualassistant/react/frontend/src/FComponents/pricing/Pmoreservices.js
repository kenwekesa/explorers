import React from 'react'
import "./Pmoreservices.css"
import Digital from './Smallcards/digital'
import Content from './Smallcards/content'
import Database from './Smallcards/database'
import Webdev from './Smallcards/webdev'


const Pmoreservices = () => {
  return (
    <div className='Mour'>
      <div>
        <div className='Pserv'>
          <Digital/>
          <Content/>
        </div>
        <div className='Pserv'>
          <Webdev/>
          <Database/>
        </div>
      </div>
      <div className='Pours'>
        <p>More <span className='spancolor1'>services</span></p>
      </div>
    </div>
  )
}

export default Pmoreservices