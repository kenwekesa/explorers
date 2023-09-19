import React from 'react'
import Aboutchoose from '../about/Aboutchoose'
import Footer from '../footer/footer'
import MainNav from '../navbar/navbar'
import "./Signupcard.css"

const Mainsignup = () => {
  return (
    <div className='mainsignup'>
        <MainNav />
        <Aboutchoose />
        <Footer />  
    </div>
  )
}

export default Mainsignup