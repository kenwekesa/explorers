import React from 'react'
import Footer from '../../Admin/footer/Footer'
import Mainchat from '../../FComponents/chat/Mainchat'
import Navbar from '../navbar/navbar/Navbar'
import "./Support.css"

const VASupport = () => {
  return (
    <div className='virtual-support'>
          <div className='virtual_support_navbar'>
              <Navbar />
          </div>
          <div>
             <Mainchat />
          </div>
          <div>
              <Footer />
          </div>
      </div>
  )
}

export default VASupport