import React from 'react'
import Loginform from '../../FComponents/login/Loginform'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import "./AdminRegister.css"
import Contactfrom from './registercard/Contactfrom'

const AdminRegister = () => {
  return (
    <div className='admindashboard'>
          <div className="dashboardnav">
              <Navbar/>
          </div>
          <div>
          <div className='Adminregister_card'>
            <Contactfrom />
          </div>
          <Footer />
          </div>
      </div>
  )
}

export default AdminRegister