import React from 'react'
import Loginform from '../../FComponents/login/Loginform'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import "./AdminRegister.css"
import Contactfrom from './registercard/Contactfrom'

const AdminRegister = () => {
  return (
    <div className='register_admindashboard'>
          <div className="register_dashboardnav">
              <Navbar/>
          </div>
          <div>
          <div className='register_Adminregister_card'>
            <Contactfrom />
          </div>
          <Footer />
          </div>
      </div>
  )
}

export default AdminRegister