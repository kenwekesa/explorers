import React from 'react'
import "./Landabout.css"
import Mlandacard from './Mlandacard'

const Landabout = () => {

  return (
    <div className='mlandfirst'>
        <div className='mlandfsec'>
          <Mlandacard />   
        </div>
        <div className='mlandsecond'>
           <p className='mlandpone'>About <span className='mlandcolors'>Us</span></p> 
           <p className='mlandptwo'>Our goal and mission is to provide you with world class designs and well thought out and executed mobile applications and websites at a pocket  friendly prices. Our goal and mission is to provide you with world class designs and well
            thought out and executed mobile applications and websites at a pocket  friendly prices. Our goal and mission is to provide you with world class designs and well
            thought out and executed mobile applications and websites at a pocket  friendly prices.</p> 
            <div className='mlandprice'>
            <div className='mlandtitle'>
                      {/* <p> <span className='aboutpthree'>670 +</span> <br></br> Completed Projects</p>          */}
             <a href='home.html' className='ton tanlando'>Read More</a>
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