import React from 'react'
import Footer from '../../components/client_dashboard/footer/Footer'
import Navbar from '../../components/client_dashboard/navbar/Navbar'
import Chat from './components/Chat'
import Sidebar from './components/Sidebar'
import "./Mainchat.css"

const Mainchat = () => {
  return (
  <div className='mainaddfunds'>
     <div className='mainaddnav'>
        <Navbar />
      </div> 
        <div className='mainchat'>
        <div className='container'>
         <Sidebar />
         <Chat /> 
        </div>
        </div>
      <Footer />
    </div>
  )
}

export default Mainchat