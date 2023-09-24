import React from 'react'
import "./servicecard.css"
import checked from "../../images/checkradio.png"
import { Link } from 'react-router-dom'

const Servicecard = () => {

    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  return (
      <div className='servicard'>
          <div className='cardserve'>
              <p className='servpe'>Enterpreneur <br></br><span className='servpi'>$300 </span>/month</p>
              {/* <p>$300 <span className='servp'>/ month</span></p> */}
              <hr className='serhr'/>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 25hrs / month</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> Monthly Membership</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 24/7 Support</p>
              <Link className='footerbtn footernavlinkbtn' onClick={scrollToTop} to="/signup">Sign Up</Link>
          </div>
          <div className='cardserve'>
              <p className='servpe'>Starter <br></br><span className='servpi'>$600 </span>/month</p>
              {/* <p>$600 <span className='servp'>/ month</span></p> */}
              <hr className='serhr'/>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 50hrs / month</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> Monthly Membership</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 24/7 Support</p>
              <Link className='footerbtn footernavlinkbtn' onClick={scrollToTop} to="/signup">Sign Up</Link>
          </div>
          <div className='cardserve'>
              <p className='servpe'>Professional <br></br><span className='servpi'>$800 </span>/month</p>
              {/* <p>$700 <span className='servp'>/ month</span></p> */}
              <hr className='serhr'/>
               <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 80hrs / month</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> Monthly Membership</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 24/7 Support</p>
              <Link className='footerbtn footernavlinkbtn' onClick={scrollToTop} to="/signup">Sign Up</Link>
          </div>
      </div>
  )
}

export default Servicecard