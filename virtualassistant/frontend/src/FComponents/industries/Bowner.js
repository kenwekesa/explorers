import React from 'react'
// import Aboutcard from '../about/aboutcard'
// import bwoner from "../../images/vafront.png"
import "./Bowner.css"
import { Link } from 'react-router-dom'
import Industrycardfirst from './industrycards/firstcard/Industrycardfirst';

const Bowner = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  return (
  <div className='industry-owner'>
    <div className='industry-owmain'>
      <div className='industry-oimg'>
          {/* <img src={bwoner} alt='logo' loading="lazy" className='bownerimg' />  */}
         <Industrycardfirst />
      </div>
      <div className='industry-oimgs'>
        <p className='industry-firstp'>Small Business <span className='spancolor1'>Owners</span></p>
         <p className='industry-secondp'>Small business owners, unlock your full potential with VA's tailored services. Whether you're running a boutique shop, a consultancy firm, a tech startup, or even a healthcare clinic, our solutions are designed to fuel your growth. Pay only for the precise assistance you need, preserving your valuable resources. Spend your time strategizing and innovating while we efficiently manage the rest. Our team is at your service 24/7, providing unwavering support to ensure your small business thrives. With VA, you'll discover excellence in virtual assistance, where your success is our top priority. Let us help you streamline operations, exceed your goals, and surprise yourself with the results.</p>
         <Link className='ton Mlandhover-button' onClick={scrollToTop} to="/signup">Hire VA</Link>       
     </div>  
    </div>        
    </div>
  )
}

export default Bowner