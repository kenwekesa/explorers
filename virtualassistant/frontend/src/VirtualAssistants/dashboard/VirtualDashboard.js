import React from 'react'
import Footer from '../../Admin/footer/Footer'
import Addupdates from '../../pages/addfunds/Addupdates'
import Navbar from '../navbar/navbar/Navbar'
import "./Dashboard.css"
import Active from './dashcards/active'
import Available from './dashcards/available'
import Dascomplete from './dashcards/dascomplete'
import Dashcancel from './dashcards/dashcancel'
import Dashmess from './dashcards/dashmess'
import NewPlans from './dashcards/supportdas'

const VirtualDashboard = () => {
  return (
      <div className='virtual-dashboard'>
          <div className='virtual_dashboard_navbar'>
              <Navbar />
          </div>
            <div className='virtual_dashboard_main'>
                <div className='virtual_dashboard_title'>
                    <h1>Dashboard</h1>
                </div>
                <div className='dashp'>
            <div className='mlandservone'>
                      <NewPlans />
                      <Active/>
            
            <Dascomplete/>
            </div>
            
            <div className='mlandservone'>
            <Available />
            <Dashmess/>
            <Dashcancel/>
            </div>
        </div>
        <div className='addmainupdates'>
            <Addupdates /> 
        </div>
            </div>
          <div>
              <Footer />
          </div>
      </div>
  )
}

export default VirtualDashboard