import React from 'react'
import Mpricenav from './Mpricenav'
import Footer from '../footer/footer'
import Pourservices from './Pourservices'
import Pmoreservices from './Pmoreservices'
import Mmprice from './Mmprice'
import "./Mmprice.css"



const Mprice = () => {
  return (
    <div>
      <Mpricenav />
      <Pourservices/>
      <Pmoreservices/>
      <Mmprice/>
      <Footer/>
    </div>
  
  )
}

export default Mprice