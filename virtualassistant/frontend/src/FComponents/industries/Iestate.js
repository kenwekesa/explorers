import React from 'react'
import bwoner from "../../images/vcont.jpg"
import "./Iecommerce.css"

const Iestate = () => {
 
return (
  <div className='induowner'>
    <div className='induowmain'>
      <div className='induoimgs'>
        <p className='indufirstp'>Health Care <span className='spancolor1'>Solutions</span></p>
         <p className='indusecondp'>Healthcare providers, enhance your patient care with VA's tailored solutions. Whether you're a medical practice, a dental clinic, or a telehealth service, our services are designed to support your healthcare operations. Pay only for the assistance that aligns with your specific healthcare needs. Spend your time delivering quality care while we handle administrative tasks and support services seamlessly. Rest assured with our 24/7 support, ready to assist with any healthcare challenges that arise. Experience the effectiveness of our digital marketing strategies in reaching and engaging with your patients. VA's resourceful approach streamlines healthcare processes, ensuring better patient outcomes and practice efficiency. Choose VA for a client-centric approach that aligns with your healthcare mission and vision.</p>
        <a href="one.html" className="ton">Hire VA</a>        
     </div>
     <div className='induoimg'>
        <img src={bwoner} alt='logo' loading="lazy" className='bownerimg'/>   
     </div>         
    </div>        
    </div>
  )
}

export default Iestate