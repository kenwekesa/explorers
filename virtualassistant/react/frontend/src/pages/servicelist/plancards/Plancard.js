import React from 'react'
import "./Plancard.css"
import checked from "../../../images/checkradio.png"

const Plancard = () => {

  return (
      <div className='plancard'>
          <div className='placecards'>
          <div className='planserve'>
              <p className='servpe'>Enterpreneur <br></br><span className='servpi'>$300 </span>/month</p>
              {/* <p>$300 <span className='servp'>/ month</span></p> */}
              <hr className='serhr'/>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 25hrs / month</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> Monthly Membership</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 24/7 Support</p>
          </div>
          <div className='planserve'>
              <p className='servpe'>Starter <br></br><span className='servpi'>$600 </span>/month</p>
              {/* <p>$600 <span className='servp'>/ month</span></p> */}
              <hr className='serhr'/>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 50hrs / month</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> Monthly Membership</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 24/7 Support</p>
          </div>
          <div className='planserve'>
              <p className='servpe'>Professional <br></br><span className='servpi'>$800 </span>/month</p>
              {/* <p>$700 <span className='servp'>/ month</span></p> */}
              <hr className='serhr'/>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 80hrs / month</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> Monthly Membership</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 24/7 Support</p>
          </div>
          </div>
          <div className='placecards'>
             <div className='planserve'>
              <p className='servpe'>Teams <br></br><span className='servpi'>$900 </span>/month</p>
              {/* <p>$300 <span className='servp'>/ month</span></p> */}
              <hr className='serhr'/>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 45hrs / month</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> Monthly Membership</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 24/7 Support</p>
          </div>
          <div className='planserve'>
              <p className='servpe'>Top Enterpreneurs <br></br><span className='servpi'>$1200 </span>/month</p>
              {/* <p>$600 <span className='servp'>/ month</span></p> */}
              <hr className='serhr'/>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 90hrs / month</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> Monthly Membership</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 24/7 Support</p>
          </div>
          <div className='planserve'>
              <p className='servpe'>Top Professional <br></br><span className='servpi'>$1400 </span>/month</p>
              {/* <p>$700 <span className='servp'>/ month</span></p> */}
              <hr className='serhr'/>
               <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 125hrs / month</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> Monthly Membership</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 24/7 Support</p>
          </div> 
          </div>
      </div>
  )
}

export default Plancard