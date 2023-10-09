import React from 'react'
import Footer from '../../Admin/footer/Footer'
import Navbar from '../navbar/navbar/Navbar'

const Virtual_Dashboard = () => {
  return (
      <div className='virtual-dashboard'>
          <div>
              <Navbar />
          </div>
          Dashboard
          <div>
              <Footer />
          </div>
      </div>
  )
}

export default Virtual_Dashboard