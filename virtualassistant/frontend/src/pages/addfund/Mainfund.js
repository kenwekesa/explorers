import React from 'react'
import Footer from '../../components/client_dashboard/footer/Footer'
import Navbar from '../../components/client_dashboard/navbar/Navbar'
import "./Mainfund.css"

const Mainfund = () => {
  return (
    <div className='mainaddfunds'>
      <div className='mainaddnav'>
        <Navbar />
          </div>
      <div className='addpagecontent'>
      <p className='addnewplan'>Add Funds</p>
      <div className='addplancards'>
                  
      </div>
      <div className='addmainupdates'>
      </div>
      </div>
      <Footer />
      </div>
  )
}

export default Mainfund