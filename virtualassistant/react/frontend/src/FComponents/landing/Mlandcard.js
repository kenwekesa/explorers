import React from 'react'
import "./Mlandcard.css"
import bar from "../../images/horibar.png"

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
        <p className='mlandparagraph'>Joining VA is easy. Just complete a brief registration form with your business details,
          and your VA account will be ready. Your information is secure, and you can start exploring our virtual assistant,
          web development, digital marketing, and database management services.</p>
        </div> 
       <div className='mlandcards'>
         <div className='mlandhead1'>
                  {/* <hr className='mlandhr'></hr>  */}
          <img src={ bar } alt="bar" className='mlaimg' loading="lazy"/>  
            <p className='mlandphr'>02</p>  
            <p className='mlandphrei'>Onboarding</p>       
         </div>
        <p className='mlandparagraph'>After registration, our onboarding process ensures a smooth transition into our services.
          We'll guide you through setup, where you specify your preferences. We prioritize a personalized approach to tailor
          our services precisely to your business needs.</p>     
        </div> 
       <div className='mlandcards'>
        <div className='mlandhead1'>
                  {/* <hr className='mlandhr'></hr>  */}
          <img src={ bar } alt="bar" className='mlaimg' loading="lazy"/>  
            <p className='mlandphr'>03</p>  
            <p className='mlandphrei'>24/7 support</p>       
         </div>
        <p className='mlandparagraph'>VA provides around-the-clock support. Reach out to us anytime, day or night, with questions or issues,
          and our dedicated support team will assist you promptly. Your success is our top priority, and our 24/7 support reflects our
          commitment to being there when you need us most.</p>     
       </div>    
    </div>
  )
}

export default Mlandcard