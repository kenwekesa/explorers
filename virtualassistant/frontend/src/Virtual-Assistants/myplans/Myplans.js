import React from 'react'
import Footer from '../../Admin/footer/Footer'
import Navbar from '../navbar/navbar/Navbar'
import "./Myplans.css"

const Myplans = () => {
  return (
    <div className='virtual-myplans'>
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

export default Myplans