import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import "./Dashboard.css"
import Active from './dashcards/active'
import Admins from './dashcards/admins'
import Available from './dashcards/available'
import Dascomplete from './dashcards/dascomplete'
import Dashcancel from './dashcards/dashcancel'
import Dashmess from './dashcards/dashmess'
import Emails from './dashcards/emails'
import Empty from './dashcards/empty'
import Supportdas from './dashcards/supportdas'

const AdminDashboard = () => {
  return (
      <div className='admin_dashboards_main'>
          <div className="admin_dashboards_main_navbar">
            <Navbar/>
            </div>
              <div className='admin_dashboards_content_title'>
              <h1>Dashboard</h1>
        
                <div className='admin_dashboards_cards'>
                <Active/>
                <Dashcancel/>
                <Dascomplete/>
                </div>

                <div className='admin_dashboards_cards'>
                <Available />
                <Dashmess/>
                <Supportdas/>
                </div>

                <div className='admin_dashboards_cards'>
                <Admins />
                <Emails/>
                <Empty/>
                </div>
            </div>
              <div className='admin_dashboard_main_footer'>
                    <Footer />
              </div>
          </div>
  )
}

export default AdminDashboard