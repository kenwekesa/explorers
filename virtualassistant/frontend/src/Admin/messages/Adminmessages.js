import React from 'react'
import Chat from '../../components/chats/Chat'
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
            <Chat />
          </div>
            <Footer />
          </div>
      </div>
  )
}

export default Adminmessages