import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import "./Adminfunds.css"

const Adminfunds = () => {
  return (
    <div className='admindashboard'>
          <div className="dashboardnav">
              <Navbar/>
          </div>
          <div>
              <div className='admindashboardcontent'>
                  this is the dashboard
              </div>
              <Footer />
          </div>
      </div>
  )
}

export default Adminfunds