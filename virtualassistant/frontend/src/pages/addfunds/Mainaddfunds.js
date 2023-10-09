import React from 'react'
// import Footer from '../../FComponents/footer/footer'
import MainNav from '../../FComponents/navbar/navbar'
import Footer from '../../components/client_dashboard/footer/Footer'
import Navbar from '../../components/client_dashboard/navbar/Navbar'
import "./Mainaddfunds.css"
import Addfirstcard from './addcards/Addfirstcard'
import Addsecondard from './addcards/Addsecondard'
import Addupdates from './Addupdates'

const Mainaddfunds = () => {
  return (
    <div className='mainaddfunds'>
      <div className='mainaddnav'>
        <Navbar />
      </div>
      <div className='addpagecontent'>
        <p className='addnewplan'>New Plan</p>
      <div className='addplancards'>
        <Addfirstcard />
        <Addsecondard />
        </div>
      <div className='addmainupdates'>
         <Addupdates /> 
      </div>
      </div>
      <Footer />
      </div>
  )
}

export default Mainaddfunds