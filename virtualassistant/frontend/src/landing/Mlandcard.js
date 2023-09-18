import React from 'react'
import "./Mlandcard.css"
import bar from "../images/horibar.png"

const Mlandcard = () => {
  return (
    <div className='mlandcard'>
       <div className='mlandcards'>
         <div className='mlandhead1'>
          {/* <hr className='mlandhr'></hr> */}
           <img src={ bar } alt="bar" className='mlaimg' loading="lazy"/>        
           <p className='mlandphr'>01</p> 
           <p className='mlandphrei'>Registration</p>       
        </div>
        <p className='mlandparagraph'>Optimize ten times the potential of your business by making it available on
          the internet through a powerful domain name. Let us work together to develop
         the best web and mobile application that best suits your business niche</p>
        </div> 
       <div className='mlandcards'>
         <div className='mlandhead1'>
                  {/* <hr className='mlandhr'></hr>  */}
          <img src={ bar } alt="bar" className='mlaimg' loading="lazy"/>  
            <p className='mlandphr'>02</p>  
            <p className='mlandphrei'>Onboarding</p>       
         </div>
         <p className='mlandparagraph'>Optimize ten times the potential of your business by making it available on
          the internet through a powerful domain name. Let us work together to develop
         the best web and mobile application that best suits your business niche</p>     
        </div> 
       <div className='mlandcards'>
        <div className='mlandhead1'>
                  {/* <hr className='mlandhr'></hr>  */}
          <img src={ bar } alt="bar" className='mlaimg' loading="lazy"/>  
            <p className='mlandphr'>03</p>  
            <p className='mlandphrei'>24/7 support</p>       
         </div>
         <p className='mlandparagraph'>Optimize ten times the potential of your business by making it available on
          the internet through a powerful domain name. Let us work together to develop
         the best web and mobile application that best suits your business niche</p>     
       </div>    
    </div>
  )
}

export default Mlandcard