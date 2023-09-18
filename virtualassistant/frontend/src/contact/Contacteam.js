import React from 'react'
import "./Contacteam.css"
import fb from "../images/fb.png"
import inst from "../images/inst.png"
import tweet from "../images/tweet.png"
import team from "../images/teamone.jpg"

const Contacteam = () => {
  return (
     <div className='mteam'>
        <div className='mtpfirst'>
            <p className='mtpf'>Get In touch with our team</p>
              <hr className='hr'></hr>
            <p className='mtpe'>Wondering how to access a virtual assistant? <br></br>
                  We can help you</p>
              <div className='contactptun'>
                <a className='ton ptun'>info@virtual.com</a>
                <a className='ton ptun'>support@virtual.com</a>
              </div>
              <div>
               <a href='home.html' className='ctimg'><img src={fb} alt="logo" className='teamimage' loading="lazy" /> </a>
               <a href='home.html' className='ctimg'><img src={inst} alt="logo" className='teamimage' loading="lazy" /> </a> 
               <a href='home.html' className='ctimg'><img src={tweet } alt="logo" className='teamimage' loading="lazy"/> </a>    
            </div>
        </div>
        <div>
            <img src={team } alt="logo" className='teamimage' loading="lazy"/>    
        </div>
    </div>
  )
}

export default Contacteam