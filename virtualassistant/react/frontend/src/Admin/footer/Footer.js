import React from 'react'
import "./Footer.css"
import instagram from "../../images/instagram.png"
import facebook from "../../images/facebook.png"
import twitter from "../../images/twitter.png"

const Footer = () => {
  return (
       <div className='adminfooter'>
        <div>
          <p>&copy;2023 VA | All Rights Reserved</p>
        </div>
        <div>
          <a href="home.html"><img src={facebook} loading="lazy" alt="logo" /></a>
          <a href="home.html"><img src={instagram} loading="lazy" alt="logo" /></a>
          <a href="home.html"><img src={ twitter } loading="lazy" alt="logo"/></a>
        </div>
      </div>
  )
}

export default Footer