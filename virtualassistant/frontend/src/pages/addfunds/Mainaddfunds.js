import React from 'react'
// import Footer from '../../FComponents/footer/footer'
import "./Mainaddfunds.css"
import Addfirstcard from './addcards/Addfirstcard'
import Addsecondard from './addcards/Addsecondard'
import Addupdates from './Addupdates'
import ClientNavbar from '../../Admin/navbar/navbar'
import Footer from '../../Admin/footer/Footer'

const Mainaddfunds = () => {
  return (
    <div className='mainaddfunds'>
      <div className='mainaddnav'>
        <ClientNavbar />
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