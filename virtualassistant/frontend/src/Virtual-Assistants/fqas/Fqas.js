import React from 'react'
import Footer from '../../Admin/footer/Footer'
import Navbar from '../navbar/navbar/Navbar'
import "./Fqas.css"

const Fqas = () => {
  return (
    <div className='virtual-fqas'>
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

export default Fqas