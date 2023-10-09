import React from 'react'
import Loginform from '../../FComponents/login/Loginform'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import "./AdminRegister.css"

const AdminRegister = () => {
  return (
    <div className='admindashboard'>
          <div className="dashboardnav">
              <Navbar/>
          </div>
          <div>
              <div className='admindashboardcontent'>
                  <Loginform />
              </div>
              <Footer />
          </div>
      </div>
  )
}

export default AdminRegister