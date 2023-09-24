import React from 'react'
import Abouthow from '../about/Abouthow'
import Footer from '../footer/footer'
import Navtwo from '../nav/navtwo'
import Signupcard from './Signupcard'
import "./Signupcard.css"
import Signupnav from './Signupnav'

const Mainsignup = () => {
  return (
    <div>
        <Signupnav />
        <Signupcard />
        <Footer />  
    </div>
  )
}

export default Mainsignup