import React from 'react'
import "./Contacteam.css"
import team from "../images/teamone.jpg"

const Contacteam = () => {
  return (
     <div className='mteam'>
        <div className='mtpfirst'>
            <p className='mtpf'>Get In touch with our team</p>
              <hr className='hr'></hr>
            <p className='mtpe'>Wondering how to access a virtual assistant? <br></br>
                  We can help you</p>
              <div>
                <a href='home.html' className='ton'>info@virtual.com</a>
                <a href='home.html' className='ton'>support@virtual.com</a>
              </div>
              <div>
               <a href='home.html' className='ctimg'><img src={team} alt="logo" className='teamimage' loading="lazy" /> </a>
                <a href='home.html' className='ctimg'><img src={team} alt="logo" className='teamimage' loading="lazy" /> </a> 
               <a href='home.html' className='ctimg'><img src={team } alt="logo" className='teamimage' loading="lazy"/> </a>    
            </div>
        </div>
        <div>
            <img src={team } alt="logo" className='teamimage' loading="lazy"/>    
        </div>
    </div>
  )
}

export default Contacteam