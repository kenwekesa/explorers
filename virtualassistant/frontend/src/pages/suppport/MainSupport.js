import React from 'react'
import Footer from '../../Admin/footer/Footer'
import ClientNavbar from '../../Admin/navbar/ClientNavbar'
import Mainchat from '../../FComponents/chat/Mainchat'
import ChatHome from '../../FComponents/chat/pages/Home'
import ChatLogin from '../../FComponents/chat/pages/Login'
import Register from '../../FComponents/chat/pages/Register'
import "./MainSupport.css"

const MainSupport = () => {
  return (
      <div className='MainSupport'>
        <div className='MainSupportNavbar'>
        {/* <ClientNavbar /> */}
        <ClientNavbar />
        </div>
        {/* <ChatHome /> */}
        {/* <Register /> */}
        {/* <ChatLogin /> */}
        <Mainchat />
        <Footer />
      </div>
  )
}

export default MainSupport