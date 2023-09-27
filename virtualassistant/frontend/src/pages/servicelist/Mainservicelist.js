import React from 'react'
import Footer from '../../components/client_dashboard/footer/Footer'
import Navbar from '../../components/client_dashboard/navbar/Navbar'
import "./Mainservicelist.css"
import Plancard from './plancards/Plancard'

const Mainservicelist = () => {
  return (
      <div className='mainservicelist'>
       <div className='mainaddnav'>
        <Navbar />
      </div>
      <div className='addpagecontent'>
        <p className='addnewplan'>Available Plans</p>
      <div className='addplancards'>
         <Plancard />         
      </div>
      <div className='addmainupdates'>
      </div>
      </div>
      <div className='addpagecontent'>
        <p className='addnewplan'>Available Services</p>
      <div className='addplancards'>
         <Plancard />         
      </div>
      <div className='addmainupdates'>
      </div>
      </div>
      <Footer />
      </div>
  )
}

export default Mainservicelist