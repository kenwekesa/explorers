import React from 'react'

import './orderhistory.scss'
import Navbar from '../../components/client_dashboard/navbar/Navbar'
import Footer from '../../components/client_dashboard/footer/Footer'

function Orderhistory() {
  return (
    <div className='orderhistory'>
       <Navbar className='orderhistory_navbar'/>
       <div className="orderhistory-content">
        {/* Your page content goes here */}
      </div>
       <Footer className="orderhistory_footer"/>
    </div>
  )
}

export default Orderhistory