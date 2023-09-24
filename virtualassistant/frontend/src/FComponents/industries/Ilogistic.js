import React from 'react'
import bwoner from "../../images/veight.jpg"
import "./Bowner.css"
import { Link } from 'react-router-dom'

const Ilogistic = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  return (
  <div className='bowner'>
    <div className='bowmain'>
      <div className='boimg'>
        <img src={bwoner} alt='logo' loading="lazy" className='bownerimg'/>   
      </div>
      <div className='boimgs'>
        <p className='bfirstp'>Logistic <span className='spancolor1'>Support</span></p>
         <p className='bsecondp'>Logistics professionals, experience a new level of efficiency with VA. Whether you operate in shipping, supply chain management, transportation, or healthcare logistics, our services are tailored to your logistics needs. Pay only for the specific support your operations require, reducing unnecessary costs. Spend your time developing logistics strategies while we handle the intricate details of your daily operations. Rest easy with our 24/7 support ready to tackle any logistics challenges that arise. Our resourceful database management optimizes your operations, and our unwavering commitment to excellence ensures timely deliveries and satisfied customers. VA's client-centric approach means our services are customized to your unique logistics requirements, guaranteeing your logistics success.</p>
         <Link className='ton Mlandhover-button' onClick={scrollToTop} to="/signup">Hire VA</Link>        
     </div>  
    </div>        
    </div>
  )
}


export default Ilogistic