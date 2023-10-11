import React from 'react'
import './admindash.css'
// import Navbar from '../../components/client_dashboard/navbar/Navbar'
// import Footer from '../../components/client_dashboard/footer/Footer'
import Supportdas from './dashcards/supportdas'
import Dashmess from './dashcards/dashmess'
import Available from './dashcards/available'
import Dascomplete from './dashcards/dascomplete'
import Dashcancel from './dashcards/dashcancel'
import Active from './dashcards/active'
import Adminnotif from './dashcards/adminnotif'
import ClientNavbar from '../../Admin/navbar/navbar'
import Footer from '../../Admin/footer/Footer'
import Addupdates from '../addfunds/Addupdates'


const Admindash = () => {
  return (
    
    <div className='dashhead'>
      <div className='admin_client_navbar'>
        <ClientNavbar />
      </div>
      <h1>My dashboard</h1>
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