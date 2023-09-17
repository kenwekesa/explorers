import React from 'react'
import "./servicecard.css"
import checked from "../images/checkradio.png"

const Servicecard = () => {
  return (
      <div className='servicard'>
          <div className='cardserve'>
              <p className='servp'>Enterpreneur <br></br> $300 <span className='servp'>/ month</span></p>
              {/* <p>$300 <span className='servp'>/ month</span></p> */}
              <hr className='serhr'/>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 25hrs / month</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> Monthly Membership</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 24/7 Support</p>
              <a href="home.html" className="ton">Sign Up</a>
          </div>
          <div className='cardserve'>
              <p className='servp'>Starter <br></br> $600 <span className='servp'>/ month</span></p>
              {/* <p>$600 <span className='servp'>/ month</span></p> */}
              <hr className='serhr'/>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 25hrs / month</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> Monthly Membership</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 24/7 Support</p>
               <a href="home.html" className="ton">Sign Up</a>
          </div>
          <div className='cardserve'>
              <p className='servp'>Professional <br></br>$700 <span className='servp'>/ month</span></p>
              {/* <p>$700 <span className='servp'>/ month</span></p> */}
              <hr className='serhr'/>
               <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 25hrs / month</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> Monthly Membership</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 24/7 Support</p>
               <a href="home.html" className="ton">Sign Up</a>
          </div>
      </div>
  )
}

export default Servicecard