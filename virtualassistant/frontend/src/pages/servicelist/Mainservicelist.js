import React from 'react'
import Footer from '../../components/client_dashboard/footer/Footer'
import Navbar from '../../components/client_dashboard/navbar/Navbar'
import "./Mainservicelist.css"

const Mainservicelist = () => {
  return (
      <div className='mainservicelist'>
       <div className='mainaddnav'>
        <Navbar />
      </div>
      <div className='addpagecontent'>
        <p className='addnewplan'>New Plan</p>
      <div className='addplancards'>
        </div>
      <div className='addmainupdates'>
      </div>
      </div>
      <Footer />
      </div>
  )
}

export default Mainservicelist