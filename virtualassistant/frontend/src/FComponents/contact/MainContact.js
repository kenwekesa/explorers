import React from 'react'
import Footer from '../footer/footer'
// import Pricecard from '../pricing/pricecard'
import Contacteam from './Contacteam'
import Contactfrom from './Contactfrom'
import Contactnav from './Contactnav'

const MainContact = () => {
  return (
    <div>
      <Contactnav />
      <Contacteam />
      <Contactfrom />
      {/* <Pricecard /> */}
      <Footer />    
    </div>
  )
}

export default MainContact