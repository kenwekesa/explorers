import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

import "./Dashboard.css"
import Active from './dashcards/active'
import Available from './dashcards/available'
import Dascomplete from './dashcards/dascomplete'
import Dashcancel from './dashcards/dashcancel'
import Dashmess from './dashcards/dashmess'
import Supportdas from './dashcards/supportdas'

const AdminDashboard = () => {
  return (
      <div className='admindashboard'>
          <div className="dashboardnav">
              <Navbar/>
          </div>
          <div>
           <div className='virtual_dashboard_main'>
              <div className='admin_dashboard_title'>
                  <h1>Dashboard</h1>
              </div>
               <div className='dashp'>
                <div className='mlandservone'>
                <Active/>
                <Dashcancel/>
                <Dascomplete/>
                </div>
                
                <div className='mlandservone'>
                <Available />
                <Dashmess/>
                <Supportdas/>
                </div>
            </div>
            <div className='addmainupdates'>
                {/* <Addupdates />  */}
            </div>
          </div>
              <Footer />
          </div>
      </div>
  )
}

export default AdminDashboard