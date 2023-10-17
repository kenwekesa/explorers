import React from 'react'
import Footer from '../../Admin/footer/Footer'
import ClientNavbar from '../../Admin/navbar/ClientNavbar'
import Chat from '../../components/chats/Chat'
import "./MainSupport.css"

const MainSupport = () => {
  return (
      <div className='MainSupport'>
        <div className='MainSupportNavbar'>
        {/* <ClientNavbar /> */}
        <ClientNavbar />
        </div>
        <Chat />
        <Footer />
      </div>
  )
}

export default MainSupport