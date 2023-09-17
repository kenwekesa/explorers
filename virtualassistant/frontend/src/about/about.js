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
           <p className='aboutptwo'>Our goal and mission is to provide you with world class designs and well thought out and executed mobile applications and websites at a pocket  friendly prices. Our goal and mission is to provide you with world class designs and well
            thought out and executed mobile applications and websites at a pocket  friendly prices. Our goal and mission is to provide you with world class designs and well
            thought out and executed mobile applications and websites at a pocket  friendly prices.</p> 
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