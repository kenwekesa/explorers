import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import "./Adminupdates.css"
import Contactfrom from './Contactfrom'

const Adminupdates = () => {
  return (
    <div className='admindashboard'>
          <div className="dashboardnav">
              <Navbar/>
          </div>
          <div>
              <div className='Adminregister_card'>
                <Contactfrom />
              </div>
              <Footer/>
          </div>
      </div>
  )
}

export default Adminupdates