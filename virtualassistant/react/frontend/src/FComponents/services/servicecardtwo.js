import React from 'react'
import "./servicecard.css"
import checked from "../../images/checkradio.png"
import { Link } from 'react-router-dom'

const Servicecardtwo = () => {

    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  return (
      <div className='servicard'>
          <div className='cardserve'>
              <p className='servpe'>Teams <br></br><span className='servpi'>$900 </span>/month</p>
              {/* <p>$300 <span className='servp'>/ month</span></p> */}
              <hr className='serhr'/>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 45hrs / month</p>
              <p className='servp spy servp-spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> Monthly Membership</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 24/7 Support</p>
              <Link className='footerbtn footernavlinkbtn' onClick={scrollToTop} to="/signup">Sign Up</Link>
          </div>
          <div className='cardserve'>
              <p className='servpe'>Top Enterpreneurs <br></br><span className='servpi'>$1200 </span>/month</p>
              {/* <p>$600 <span className='servp'>/ month</span></p> */}
              <hr className='serhr'/>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 90hrs / month</p>
              <p className='servp spy servp-spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> Monthly Membership</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 24/7 Support</p>
              <Link className='footerbtn footernavlinkbtn' onClick={scrollToTop} to="/signup">Sign Up</Link>
          </div>
          <div className='cardserve'>
              <p className='servpe'>Top Professional <br></br><span className='servpi'>$1400 </span>/month</p>
              {/* <p>$700 <span className='servp'>/ month</span></p> */}
              <hr className='serhr'/>
               <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 125hrs / month</p>
              <p className='servp spy servp-spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> Monthly Membership</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 24/7 Support</p>
              <Link className='footerbtn footernavlinkbtn' onClick={scrollToTop} to="/signup">Sign Up</Link>
          </div>
      </div>
  )
}

export default Servicecardtwo