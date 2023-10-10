import React from 'react'
import "./Register.css"
import add from "../../../images/addimagetwo.png"

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
          <p>Let's chat now!</p> 
          <p>Login Now!</p>    
          <form> 
            <input type="email" placeholder='email!'/> 
            <input type="password" placeholder='password!'/>     
            <button>Sign In</button>         
            </form> 
            <a>You don't have an account? create account</a>  
       </div>   
    </div>
  )
}

export default Login