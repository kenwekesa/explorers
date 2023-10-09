import React from 'react'
import Footer from '../../Admin/footer/Footer'
import Navbar from '../navbar/navbar/Navbar'
import "./Myfunds.css"

const Myfunds = () => {
  return (
    <div className='client-myfunds'>
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

export default Myfunds