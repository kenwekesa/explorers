import React from 'react'
import './admindash.css'
import Navbar from '../../components/client_dashboard/navbar/Navbar'
import Footer from '../../components/client_dashboard/footer/Footer'
import Supportdas from './dashcards/supportdas'
import Dashmess from './dashcards/dashmess'
import Available from './dashcards/available'
import Dascomplete from './dashcards/dascomplete'
import Dashcancel from './dashcards/dashcancel'
import Active from './dashcards/active'
import Adminnotif from './dashcards/adminnotif'


const Admindash = () => {
  return (
    
    <div className='dashhead'>
      <Navbar/>
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
      <div className='adminnot'>
      <Adminnotif/>
      </div>
      <Footer/>
    </div>
    
  )
}

export default Admindash