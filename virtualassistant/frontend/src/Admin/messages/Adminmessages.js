import React from 'react'
import Mainchat from '../../FComponents/chat/Mainchat'
import ChatHome from '../../FComponents/chat/pages/Home'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import "./Adminmessages.css"

const Adminmessages = () => {
  return (
    <div className='admindashboard'>
          <div className="dashboardnav">
            <Navbar/>
          </div>
          <div>
          <div className='admin_messages'>
            <Mainchat />
          </div>
            <Footer />
          </div>
      </div>
  )
}

export default Adminmessages