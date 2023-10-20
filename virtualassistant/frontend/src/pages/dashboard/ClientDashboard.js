import React from 'react'
import './admindash.css'
import Footer from '../../Admin/footer/Footer'
import Addupdates from '../addfunds/Addupdates'
import ClientNavbar from '../../Admin/navbar/ClientNavbar'
import ClientActive from './dashcards/Clientactive'
import ClientComplete from './dashcards/Clientcomplete'
import Clientmessage from './dashcards/Clientmessage'
import Clientpending from './dashcards/Clientpending'
import ClientAvailableFund from './dashcards/Clientavailablefund'
import ClientCancels from './dashcards/ClientCancels'


const ClientDashboard = () => {
  return (
    
     <div className='virtual-dashboard'>
          <div className='virtual_dashboard_navbar'>
              <ClientNavbar />
          </div>
            <div className='virtual_dashboard_main'>
                <div className='virtual_dashboard_title'>
                    <h1>Dashboard</h1>
                </div>
                <div className='dashp client_dashboards_main_contents'>
            <div className='mlandservone'>
            <ClientActive/>
        <ClientCancels />
        <ClientComplete/>
            </div>
            
            <div className='mlandservone'>
           <ClientAvailableFund />
        <Clientmessage/>
        <Clientpending/>
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

export default ClientDashboard