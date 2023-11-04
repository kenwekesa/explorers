import React from 'react'
import Footer from '../../Admin/footer/Footer'
import ClientNavbar from '../../Admin/navbar/ClientNavbar'
import "./MainSupport.css"

const MainSupport = () => {
  return (
      <div className='MainSupport'>
        <div className='MainSupportNavbar'>
        {/* <ClientNavbar /> */}
        <ClientNavbar />
        </div>
        <Footer />
      </div>
  )
}

export default MainSupport