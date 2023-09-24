import React from 'react'
import Mpricenav from './Mpricenav'
import Footer from '../footer/footer'
import Pourservices from './Pourservices'
import Pmoreservices from './Pmoreservices'
import Mmprice from './Mmprice'
import Faq from './faq'
import Admindash from './admindash'



const Mprice = () => {
  return (
    <div>
      <Mpricenav/>
      <Pourservices/>
      <Pmoreservices/>
      <Mmprice/>
      <Faq/>
      <Admindash/>
      <Footer/>
    </div>
  
  )
}

export default Mprice