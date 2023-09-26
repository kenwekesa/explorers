import React from 'react'
import './admindash.css'
import img3 from "../../images/In Progress.png"
import img4 from "../../images/Cancel.png"
import img5 from "../../images/Checkmark.png"
import img6 from "../../images/Cash in Hand.png"
import img7 from "../../images/Message.png"
import img8 from "../../images/Support agent.png"
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
        <Available/>
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