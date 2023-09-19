import React from 'react'
import reset from "../../images/resetpass.png"
import "./Loginform.css"

const Loginform = () => {
    return (
    <div className='mlogmainf'>
    <div className='mloginform'>
       <p className='mplog'>Please Login</p>  
          <hr></hr>   
          <input className='loginputone logtop' placeholder='Email' type="email"/> <br></br>
          <input className='loginputone logtopi' placeholder='Password' type="password" /> <br></br>
          <a className='ton'>Login</a>
          <div className='logimgreset'>
              <img src={reset} alt="reset" loading="lazy" />
              <p>Reset your password</p>
          </div>
      </div>
    </div>
  )
}

export default Loginform