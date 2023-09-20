import React from 'react'
import bwoner from "../../images/vten.jpg"
import "./Bowner.css"
import { Link } from 'react-router-dom'

const IHealth = () => {

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
        <p className='bfirstp'>Real Estate <span className='spancolor1'>Solutions</span></p>
         <p className='bsecondp'>Real estate professionals, transform your business with VA's tailored solutions. Whether you're in residential, commercial, property management, or even healthcare real estate, our services are designed to enhance your operations. Pay only for the assistance that accelerates your efficiency and sales. Spend your time closing deals and connecting buyers with their dream homes, commercial spaces, or even healthcare facilities while we take care of the details. Our cost-effective approach preserves your resources by paying only for the support you need. Rest easy with 24/7 support ready to assist with your real estate challenges. Surpass your expectations with our digital marketing strategies, attracting more buyers and sellers to your listings. VA offers resourceful real estate solutions, optimizing your property management and sales processes. Elevate your online presence with excellence in web development, showcasing your properties in the best possible light. VA's client-centric approach ensures your real estate success remains our top priority. Let us help you redefine your real estate business.</p>
         <Link className='ton Mlandhover-button' onClick={scrollToTop} to="/signup">Hire VA</Link>       
     </div>  
    </div>        
    </div>
  )
}

    
export default IHealth