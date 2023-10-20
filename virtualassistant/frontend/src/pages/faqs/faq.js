import React from 'react'
import "./faq.css"
import img0 from "../../images/cancel.png"
import img1 from "../../images/controlpointduplicate.png"
import img2 from "../../images/deliverytime.png"
import { useState } from 'react';
import Footer from '../../Admin/footer/Footer'
import ClientNavbar from '../../Admin/navbar/ClientNavbar'

const Faq = () => {

    // Create state variables to manage the visibility of divs
    const [isDiv1Visible, setIsDiv1Visible] = useState(false);
    const [isDiv2Visible, setIsDiv2Visible] = useState(false);
    const [isDiv3Visible, setIsDiv3Visible] = useState(false);
    const [isDiv4Visible, setIsDiv4Visible] = useState(false);
  
    // Toggle the visibility of the first div
    const toggleDiv1Visibility = () => {
      setIsDiv1Visible(!isDiv1Visible);
    };
  
    // Toggle the visibility of the second div
    const toggleDiv2Visibility = () => {
      setIsDiv2Visible(!isDiv2Visible);
    };

     // Toggle the visibility of the second div
     const toggleDiv3Visibility = () => {
      setIsDiv3Visible(!isDiv3Visible);
    };

     // Toggle the visibility of the second div
     const toggleDiv4Visibility = () => {
      setIsDiv4Visible(!isDiv4Visible);
    };

  return (
    <div>
    <div className='faq_navbar'>
        <ClientNavbar />
    </div>
    <div className='faqhead'>
      <h1>FAQs</h1>
      <p><img src={img2} alt='logo'/>Delivery</p>
      <p> <img src={img0} alt="logo" />Cancelled</p>
      <p> <img src={img1} alt="logo" />Duplicate Plans</p>

      <div className='faqhead1'>
        <h1>Frequently Asked Questions</h1>
        <p className='faqp' onClick={toggleDiv1Visibility} 
        {...isDiv1Visible ? 'Hide Div 1' : 'Show Div 1'}>What is a virtual assistant?</p>

        <div className='hidediv'>
          {isDiv1Visible &&  (
            <div style={{ display: 'block' }}>
              A virtual assistant is a remote professional who provides a wide range of administrative, creative, or technical services to businesses and individuals.
            </div>
          )}
        </div>


        <p className='faqp' onClick={toggleDiv2Visibility}
         {...isDiv2Visible ? 'Hide Div 2' : 'Show Div 2'} >How can a virtual assistant help me?</p>

        <div className='hidediv'>
          {isDiv2Visible &&  (
            <div style={{ display: 'block' }}>
              Virtual assistants can assist with tasks like email management, appointment scheduling, data entry, research, social media management, <br/> and more, saving you time and helping you focus on your core activities.
            </div>
          )}
        </div>

        <p className='faqp' onClick={toggleDiv3Visibility}
        {...isDiv3Visible ? 'Hide Div 3' : 'Show Div 3'} >How does your virtual assistant service work?</p>

        <div className='hidediv'>
          {isDiv3Visible &&  (
            <div style={{ display: 'block' }}>
              We match you with a qualified virtual assistant based on your needs. You communicate with them remotely, and they handle tasks as instructed.
            </div>
          )}
        </div>

        <p className='faqp' onClick={toggleDiv4Visibility}
        {...isDiv4Visible ? 'Hide Div 4' : 'Show Div 4'}>How do I get started with your virtual assistant service?</p>

        <div className='hidediv'>
          {isDiv4Visible &&  (
            <div style={{ display: 'block' }}>
              To get started, simply contact us through our website or by email. We'll discuss your requirements and match you with a suitable virtual assistant.
            </div>
          )}
        </div>
      </div>
      {/* <Footer /> */}
      </div>
      <Footer />
    </div>
  )
}

export default Faq