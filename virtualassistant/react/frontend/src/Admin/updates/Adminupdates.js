import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import "./Adminupdates.css"
import Contactfrom from './Contactfrom'
import Contactupdate from './Contactupdate'

const Adminupdates = () => {
  return (
    <div className='admindashboard'>
          <div className="dashboardnav">
              <Navbar/>
          </div>
          <div>
        <div className='adminregister_card_title'>
          <p className='addnewplan'>Upd<span>ates</span></p>
          <div className='adminregister_card'>
          <div>
            <Contactfrom />
          </div>
          <div>
            <Contactupdate />
            </div>
          </div>
              </div>
              <Footer/>
          </div>
      </div>
  )
}

export default Adminupdates