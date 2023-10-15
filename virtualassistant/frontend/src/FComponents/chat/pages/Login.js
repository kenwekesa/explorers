import React from 'react'
import "./Register.css"
import add from "../../../images/addimagetwo.png"
import { useState } from 'react'
import { auth } from '../../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const ChatLogin = () => {

  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/mydashboard')
    } catch (err) {
      setError('Error creating user.');
    }
  };


  return (
    <div className='formContainer'>
        <div className='formWrapper'>
          <p>Let's chat now!</p> 
          <p>Login Now!</p>    
          <form onSubmit={handleSubmit}> 
            <input type="email" placeholder='email!'/> 
            <input type="password" placeholder='password!'/>     
            <button>Sign In</button>         
            </form> 
            <a>You don't have an account? create account</a>  
       </div>   
    </div>
  )
}

export default ChatLogin