import React from 'react'
import Aboutcard from './aboutcard'
import "./about.css"

const Aboutfirst = () => {
  return (
    <div className='aboutfirst'>
        <div className='aboutfsec'>
          <Aboutcard />    
        </div>
        <div className='aboutsecond'>
           <p className='aboutpone'>About <span className='aboutcolors'>Us</span></p> 
        <p className='aboutptwo'>Welcome to VA, the ultimate platform for businesses seeking comprehensive support in
          the digital age. Our website is designed with simplicity and efficiency in mind,
          ensuring a seamless experience from start to finish. </p> 
        <p className='aboutptwo'>Navigating VA is a breeze. The registration process is quick and straightforward. With just a few keystrokes, you'll have access to our virtual assistant, web development, digital marketing, and database management services. Your data's security is our top priority, and our robust systems keep it safe throughout your journey with us.</p>
        <p className='aboutptwo'>Our user-friendly onboarding process is designed to cater to your unique needs. We'll guide you through each step, allowing you to specify your preferences and requirements, guaranteeing that our services align seamlessly with your business goals.</p>
            <div className='aboutprice'>
            <div className='abouttitle'>
              <p> <span className='aboutpthree'>670 +</span> <br></br> Completed Projects</p>         
            </div> 
            <div className='abouttitle'>
              <p> <span className='aboutpthree'>98% </span> <br></br>Satisfied Clients</p>         
              </div> 
            </div>            
          </div>
          
    </div>
  )
}

export default Aboutfirst