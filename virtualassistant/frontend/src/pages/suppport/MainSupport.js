import React from 'react'
import Footer from '../../Admin/footer/Footer'
import ClientNavbar from '../../Admin/navbar/ClientNavbar'
// import Chat from '../../components/chats/Chat'
import Chats from '../../FComponents/chats/Api/chats/Chats'
import "./MainSupport.css"

const MainSupport = () => {
  return (
      <div className='MainSupport'>
        <div className='MainSupportNavbar'>
        {/* <ClientNavbar /> */}
        <ClientNavbar />
        </div>
        {/* <Chat /> */}
        <Chats />
        <Footer />
      </div>
  )
}

export default MainSupport