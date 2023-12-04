import React from 'react'
import "./Mlandingservices.css"
import Mladmin from './smallcards/Mladmin'
import Mlcontent from './smallcards/Mlcontent'
import Mlcustomer from './smallcards/Mlcustomer'
import Mldata from './smallcards/Mldata'
import Mldatabase from './smallcards/Mldatabase'
import Mldigital from './smallcards/Mldigital'
import Mlsocial from './smallcards/Mlsocial'
import Mlwebdev from './smallcards/Mlwebdev'
import { Link } from 'react-router-dom'

const Mlandingservices = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  return (
    <div className='mlandingservices'> 
      <div>
        <p className='mlandpara'>Our <span className='mlandparei'>Services</span></p> 
        <p className='mlandparagr'>Do you need an experienced virtual assistant? <br></br>
         <span className='mlandparagri'> We are a trusted virtual assistant providers</span></p>
      </div>
      <div className='mlandservone'>
        <Mlcustomer />
        <Mlsocial />
        <Mladmin />
        <Mldata />      
      </div>
      {/* <div className='mlandservone'>
        <Mldigital />
        <Mlcontent />
        <Mlwebdev />
        <Mldatabase />      
        </div>  */}
        <div className='mlandserbtn'>
        {/* <a href='home.html' className='ton tin'>View all services</a>   */}
        <Link className='ton tin' onClick={scrollToTop} to="/services">View all services</Link>
      </div>    
    </div>
  )
}

export default Mlandingservices