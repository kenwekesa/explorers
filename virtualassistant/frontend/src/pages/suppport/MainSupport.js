import React from 'react'
import Footer from '../../Admin/footer/Footer'
import ClientNavbar from '../../Admin/navbar/navbar'
import Mainchat from '../../FComponents/chat/Mainchat'
import ChatHome from '../../FComponents/chat/pages/Home'
import Register from '../../FComponents/chat/pages/Register'
import "./MainSupport.css"

const MainSupport = () => {
  return (
      <div className='MainSupport'>
        <div className='MainSupportNavbar'>
          <ClientNavbar />
        </div>
          {/* <ChatHome /> */}
          <Register />
        <Footer />
      </div>
  )
}

export default MainSupport