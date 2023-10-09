import React from 'react'
import "./Plancard.css"
import checked from "../../../images/checkradio.png"

const Servicecard = () => {

  return (
      <div className='plancard'>
          <div className='placecards'>
          <div className='servicecards'>
              <p className='servpe'><span className='servpi'>Customer virtual assistant</span></p>
              {/* <p>$300 <span className='servp'>/ month</span></p> */}
              <hr className='serhr' />
              <div className='service-paragraph'>
                <p className='servp spy'>Experience unparalleled customer support with our Customer Virtual Assistant service. Our dedicated virtual assistants are trained to provide top-notch customer care, ensuring your clients' satisfaction and loyalty.</p>
              </div>
              {/* <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> Monthly Membership</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 24/7 Support</p> */}
          </div>
          <div className='servicecards'>
              <p className='servpe'><span className='servpi'>Social Media virtual assistant</span></p>
              {/* <p>$300 <span className='servp'>/ month</span></p> */}
              <hr className='serhr' />
              <div className='service-paragraph'>
                <p className='servp spy'>Boost your social media presence with our Social Media Virtual Assistant service. Our experts will manage your social platforms, engaging your audience and driving brand awareness to new heights.</p>
              </div>
              {/* <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> Monthly Membership</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 24/7 Support</p> */}
          </div>
          <div className='servicecards'>
              <p className='servpe'><span className='servpi'>Virtual administrative assistant</span></p>
              {/* <p>$300 <span className='servp'>/ month</span></p> */}
              <hr className='serhr' />
              <div className='service-paragraph'>
                <p className='servp spy'>Simplify your workload with our Virtual Administrative Assistant service. Let us handle your administrative tasks, so you can focus on growing your business and achieving your goals.</p>
              </div>
              {/* <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> Monthly Membership</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 24/7 Support</p> */}
          </div>
          </div>
          <div className='placecards'>
             <div className='servicecards'>
              <p className='servpe'><span className='servpi'>Data entry virtual assistant</span></p>
              {/* <p>$300 <span className='servp'>/ month</span></p> */}
              <hr className='serhr' />
              <div className='service-paragraph'>
                <p className='servp spy'>Efficiently manage your data with our Data Entry Virtual Assistant service. Our skilled virtual assistants will ensure your information is organized, accurate, and readily accessible.</p>
              </div>
              {/* <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> Monthly Membership</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 24/7 Support</p> */}
          </div>
          <div className='servicecards'>
              <p className='servpe'><span className='servpi'>Digital marketing virtual assistant</span></p>
              {/* <p>$300 <span className='servp'>/ month</span></p> */}
              <hr className='serhr' />
              <div className='service-paragraph'>
                <p className='servp spy'>Maximize your online presence with our Digital Marketing Virtual Assistant service. Our specialists will craft and execute digital marketing strategies tailored to your business, driving growth and visibility.</p>
              </div>
              {/* <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> Monthly Membership</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 24/7 Support</p> */}
          </div>
          <div className='servicecards'>
              <p className='servpe'><span className='servpi'>Content Creation Services</span></p>
              {/* <p>$300 <span className='servp'>/ month</span></p> */}
              <hr className='serhr' />
              <div className='service-paragraph'>
                <p className='servp spy'>Captivate your audience with our Content Creation Services. Our talented writers and designers will produce high-quality content that engages, informs, and converts.</p>
              </div>
              {/* <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> Monthly Membership</p>
              <p className='servp spy'><img src={checked} alt='logo' loading="lazy" className='servc'/> 24/7 Support</p> */}
          </div> 
          </div>
      </div>
  )
}

export default Servicecard