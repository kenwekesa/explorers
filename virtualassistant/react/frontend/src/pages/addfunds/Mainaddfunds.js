import React from 'react'
import "./Mainaddfunds.css"
import Addfirstcard from './addcards/Addfirstcard'
import Footer from '../../Admin/footer/Footer'
import ClientNavbar from '../../Admin/navbar/ClientNavbar'

const Mainaddfunds = () => {
  return (
    <div className='mainaddfunds'>
      <div className='mainaddnav'>
        <ClientNavbar />
      </div>
      <div className='addpagecontent'>
        <p className='addnewplan'>New <span>Plan</span></p>
      <div className='addplancards'>
        <Addfirstcard />
      </div>
      </div>
      <Footer />
      </div>
  )
}

export default Mainaddfunds