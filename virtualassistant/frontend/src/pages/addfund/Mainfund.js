import React from 'react'
import Footer from '../../Admin/footer/Footer'
import ClientNavbar from '../../Admin/navbar/navbar'
// import Footer from '../../components/client_dashboard/footer/Footer'
// import Navbar from '../../components/client_dashboard/navbar/Navbar'
import Cardbtn from './addfund/Cardbtn'
import Creditcard from './addfund/Creditcard'
import "./Mainfund.css"

const Mainfund = () => {
  return (
    <div className='mainaddfunds'>
     <div className='mainaddnav'>
        {/* <Navbar /> */}
        <ClientNavbar />
          </div>
      <div className='mainfundcontent'>
      <p className='addnewplan'>Add Funds</p>
      <div>
         <Cardbtn />         
      </div>
      <div>
        <Creditcard />          
      </div>
      </div>
      <Footer/>
      {/* <Footer /> */}
      </div>
  )
}

export default Mainfund