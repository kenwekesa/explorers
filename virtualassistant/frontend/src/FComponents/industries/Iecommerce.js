import React from 'react'
import bwoner from "../../images/vaco.jpg"
import "./Iecommerce.css"
import { Link } from 'react-router-dom'
import Industrycardsecond from './industrycards/secondcard/Industrycardsecond'
import Industrycardfirst from './industrycards/firstcard/Industrycardfirst'
import Industrycardthird from './industrycards/thirdcard/Industrycardthird'

const Iecommerce = () => {

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
        <p className='indufirstp'>E-Commerce Business <span className='spancolor1'>Solutions</span></p>
         <p className='indusecondp'>E-commerce entrepreneurs, let VA catapult your online store to new heights. Whether you're selling fashion, electronics, artisanal goods, or even healthcare products, our solutions are tailored to your specific needs. Pay only for the services that drive your online success, and watch your sales soar. Spend your time optimizing product listings and customer experiences while we manage your daily operations with precision. Our 24/7 support ensures your e-commerce operations run seamlessly, and our digital marketing experts will pleasantly surprise you with revenue-boosting results. Trust VA for resourceful e-commerce solutions, where excellence in web development creates an enticing and user-friendly online presence. Experience the difference and redefine e-commerce success with us.</p>
         <Link className='ton Mlandhover-button' onClick={scrollToTop} to="/signup">Hire VA</Link>       
     </div>
     <div className='induoimg'>
          {/* <img src={bwoner} alt='logo' loading="lazy" className='bownerimg'/>    */}
          <Industrycardsecond />
     </div>         
    </div>        
    </div>
  )
}


export default Iecommerce