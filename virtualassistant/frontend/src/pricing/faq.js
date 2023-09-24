import React from 'react'
import "./faq.css"
import img0 from "../../src/images/Cancel.png"
import img1 from "../../src/images/Control point duplicate.png"
import img2 from "../../src/images/Delivery Time.png"
// import coins from "../../src/images/Cancel.png"
// import coins from "../../src/images/Control point duplicate.png"

const Faq = () => {
  return (
    <div className='faqhead'>
      <h1>FAQs</h1>
      <p><img src={img2} alt='logo'/>Delivery</p>
      <p> <img src={img0} alt="logo" />Cancelled</p>
      <p> <img src={img1} alt="logo" />Duplicate Plans</p>

      <div className='faqhead1'>
        <h1>Frequently Asked Questions</h1>
        <p className='faqp'>What is a virtual assistant?</p>
        <p className='faqp'>How can a virtual assistant help me?</p>
        <p className='faqp'>How does your virtual assistant service work?</p>
        <p className='faqp'>How do I get started with your virtual assistant service?</p>
      </div>
    </div>
  )
}

export default Faq