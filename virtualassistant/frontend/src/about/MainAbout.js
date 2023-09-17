import React from 'react'
import Footer from '../footer/footer'
import Aboutfirst from './about'
import Aboutchoose from './Aboutchoose'
import Abouthow from './Abouthow'
import AboutNav from './aboutnav'
import "./aboutnav.css"

const MainAbout = () => {
  return (
    <div>
      <AboutNav />
      <Aboutfirst />
      <Abouthow />
      <Aboutchoose />
      <Footer />
    </div>
  )
}

export default MainAbout