import React from 'react'
import Footer from '../footer/footer'
import Pricecard from '../pricing/pricecard'
import Contacteam from './Contacteam'
import Contactnav from './Contactnav'

const MainContact = () => {
  return (
    <div>
      <Contactnav />
      <Contacteam />
      <Pricecard />
      <Footer />    
    </div>
  )
}

export default MainContact