import React from 'react'
import Footer from '../footer/footer'
import Loginform from './Loginform'
import Loginnav from './Loginnav'
import "./Loginform.css"

const Mainlogin = () => {
  return (
    <div className='oneidi'>
    <Loginnav />
    <Loginform />
    <Footer />     
    </div>
  )
}

export default Mainlogin