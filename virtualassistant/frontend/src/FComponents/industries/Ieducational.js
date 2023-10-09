import React from 'react'
import bwoner from "../../images/vamanone.jpg"
import "./Iecommerce.css"
import { Link } from 'react-router-dom'

const Ieducational = () => {
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

return (
  <div className='induowner'>
    <div className='induowmain'>
      <div className='induoimgs'>
        <p className='indufirstp'>Educational Support <span className='spancolor1'>Services</span></p>
         <p className='indusecondp'>Educational institutions, enhance your offerings with VA's customized solutions. Whether you're a school, university, online course provider, or even a healthcare training center, our services are tailored to meet your educational needs. Pay only for the assistance that aligns with your specific educational goals. Spend your time focusing on curriculum development, student engagement, or even healthcare training, while we handle administrative tasks and support services seamlessly. Rest assured with our 24/7 support, ready to assist with any educational challenges that arise. Experience the effectiveness of our digital marketing strategies in reaching your educational objectives. VA's resourceful approach streamlines processes for both students and educators, while our excellence in web development ensures top-notch online educational platforms. Choose VA for a client-centric approach that aligns with your institution's mission and vision.</p>
         <Link className='ton Mlandhover-button' onClick={scrollToTop} to="/signup">Hire VA</Link>        
     </div>
     <div className='induoimg'>
        <img src={bwoner} alt='logo' loading="lazy" className='bownerimg'/>   
     </div>         
    </div>        
    </div>
  )
}

export default Ieducational