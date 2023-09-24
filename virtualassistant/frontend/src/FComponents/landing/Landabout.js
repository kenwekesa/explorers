import React from 'react'
import "./Landabout.css"
import Mlandacard from './Mlandacard'
import { Link } from 'react-router-dom'

const Landabout = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  return (
    <div className='mlandfirst'>
        <div className='mlandfsec'>
          <Mlandacard />   
        </div>
        <div className='mlandsecond'>
           <p className='mlandpone'>About <span className='mlandcolors'>Us</span></p> 
        <p className='mlandptwo'>Welcome to VA, your ultimate destination for virtual assistance, web development,
          digital marketing, and database management services. Our skilled virtual assistants simplify your workload,
          while our web developers create stunning online platforms. We boost your online presence through expert digital
          marketing strategies and ensure your data remains organized and secure with our database management expertise.
          VA offers personalized solutions, affordable pricing, and 24/7 support. Let us handle the details so you can
          focus on growing your business. Experience the VA advantage today!</p> 
            <div className='mlandprice'>
            <div className='mlandtitle'>
                      {/* <p> <span className='aboutpthree'>670 +</span> <br></br> Completed Projects</p>          */}
            {/* <a href='home.html' className='ton tanlando'>Read More</a> */}
            <Link className='ton tanlando' onClick={scrollToTop} to="/about">Read More</Link> 
            </div> 
            {/* <div className='abouttitle'>
              <p> <span className='aboutpthree'>98% </span> <br></br>Satisfied Clients</p>         
              </div>  */}
            </div>            
          </div>
          
    </div>
  )
}
export default Landabout