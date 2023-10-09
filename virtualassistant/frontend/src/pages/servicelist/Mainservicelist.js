import React from 'react'
import Footer from '../../Admin/footer/Footer'
import ClientNavbar from '../../Admin/navbar/navbar'
import "./Mainservicelist.css"
import Plancard from './plancards/Plancard'
import Servicecard from './plancards/Servicecard'

const Mainservicelist = () => {
  return (
      <div className='mainservicelist'>
       <div className='mainaddnav'>
        <ClientNavbar />
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
         <Servicecard />         
      </div>
      <div className='addmainupdates'>
      </div>
      </div>
      <Footer />
      </div>
  )
}

export default Mainservicelist