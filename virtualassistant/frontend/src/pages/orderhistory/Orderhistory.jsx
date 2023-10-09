import React from 'react'

import './orderhistory.scss'
import Navbar from '../../components/client_dashboard/navbar/Navbar'
import ClientNavbar from '../../Admin/navbar/navbar'
import Footer from '../../Admin/footer/Footer'

function Orderhistory() {
  return (
    <div className='orderhistory'>
       <ClientNavbar className='orderhistory_navbar'/>
       <div className="orderhistory-content">
        {/* Your page content goes here */}
      </div>
       <Footer className="orderhistory_footer"/>
    </div>
  )
}

export default Orderhistory