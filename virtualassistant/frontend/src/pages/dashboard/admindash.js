import React from 'react'
import './admindash.css'
// import Navbar from '../../components/client_dashboard/navbar/Navbar'
// import Footer from '../../components/client_dashboard/footer/Footer'
import Supportdas from '../../Virtual-Assistants/dashboard/dashcards/supportdas'
import Dashmess from '../../Virtual-Assistants/dashboard/dashcards/dashmess'
import Available from '../../Virtual-Assistants/dashboard/dashcards/available'
import Dascomplete from '../../Virtual-Assistants/dashboard/dashcards/dascomplete'
import Dashcancel from '../../Virtual-Assistants/dashboard/dashcards/dashcancel'
import Active from '../../Virtual-Assistants/dashboard/dashcards/active'
import Adminnotif from '../../Virtual-Assistants/dashboard/dashcards/adminnotif'
import Footer from '../../Admin/footer/Footer'
import Addupdates from '../addfunds/Addupdates'
import ClientNavbar from '../../Admin/navbar/ClientNavbar'


const Admindash = () => {
  return (
    
    <div className='dashhead'>
      <div className='admin_client_navbar'>
        <ClientNavbar />
      </div>
      <h1>Dashboard</h1>
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
         <Addupdates /> 
      </div>
      {/* <div className='adminnot'>
      <Adminnotif/>
      </div> */}
      <Footer/>
    </div>
    
  )
}

export default Admindash