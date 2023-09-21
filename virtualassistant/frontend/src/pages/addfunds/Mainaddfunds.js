import React from 'react'
// import Footer from '../../FComponents/footer/footer'
import MainNav from '../../FComponents/navbar/navbar'
import Footer from '../../components/client_dashboard/footer/Footer'
import Navbar from '../../components/client_dashboard/navbar/Navbar'
import "./Mainaddfunds.css"

const Mainaddfunds = () => {
  return (
      <div className='mainaddfunds'>
          <Navbar />
          <Footer />
          <MainNav />
          <p className='mainaddfunds'>Close your shoes</p>
          {/* <Footer /> */}
      </div>
  )
}

export default Mainaddfunds