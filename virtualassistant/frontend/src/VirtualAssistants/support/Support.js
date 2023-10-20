import React from 'react'
import Footer from '../../Admin/footer/Footer'
import Chat from '../../components/chats/Chat'
import Navbar from '../navbar/navbar/Navbar'
import "./Support.css"

const VASupport = () => {
  return (
    <div className='virtual-support'>
          <div className='virtual_support_navbar'>
              <Navbar />
          </div>
          <div>
             <Chat />
          </div>
          <div>
        <Footer />
        {/* <VaFooter /> */}
          </div>
      </div>
  )
}

export default VASupport