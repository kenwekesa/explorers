import React, { useState } from 'react'
import "./Signupcard.css"
import { Link } from 'react-router-dom'
import Scounntry from './selection/Scounntry'
import Sservice from './selection/Sservice'
import Shear from './selection/Shear'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'
import { async } from '@firebase/util'

const Signupcard = () => {

  const [Err, setError] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const firstName = e.target[0].value
    const lastName = e.target[1].value
    const email = e.target[2].value
    const organizationName = e.target[3].value
    const phoneNumber = e.target[4].value
    const location = e.target[5].value
    const service = e.target[6].value
    const hear = e.target[7].value
    const password = e.target[8].value
    const confirmPassword = e.target[9].value

//  const auth = getAuth(
    
    try {
    } catch {
      setError(true)
    }

 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    
  }

  return (
   <div className='cardsignupone'>
      <p className='cardmainsip'>All  fields are required</p>
         <form onSubmit={handleSubmit}>
            <div className='signcardcontent'>
              <p>First Name <span>(required)</span></p>
              <input type="text" className='signcardiinput' autoComplete required/>
            </div>
            <div className='signcardcontent'>
              <p>Last Name <span>(required)</span></p>
              <input type="text" className='signcardiinput' autoComplete required/>
            </div>
            <div className='signcardcontent'>
              <p>Email Address <span>(required)</span></p>
              <input type="email" className='signcardiinput' autoComplete required/>
            </div>
            <div className='signcardcontent'>
              <p>Organization's Name <span>(required)</span></p>
              <input type="text" className='signcardiinput' autoComplete required/>
            </div>
            <div className='signcardcontent'>
              <p>Phone Number <span>(required)</span></p>
              <input type="number" className='signcardiinput' autoComplete required/>
            </div>
            <div className='signcardcontent'>
              <p>Where are you located ?<span>(required)</span></p>
              {/* <input className='signcardiinput' required/> */}
              <div>
                <Scounntry />
              </div>
            </div>
            <div className='signcardcontent'>
              <p>What services are you most interested in ? <span>(required)</span></p>
              {/* <input className='signcardiinput' required/> */}
              <div>
                  <Sservice />
              </div>
            </div>
            <div className='signcardcontent'>
              <p>How did you hear about us <span>(required)</span></p>
              {/* <input className='signcardiinput' required/> */}
              <Shear />
            </div>
            <div className='signcardcontent'>
              <p>Set account password <span>(required)</span></p>
              <input type="password" className='signcardiinput' autoComplete required/>
            </div>
            <div className='signcardcontent'>
              <p>Match account password <span>(required)</span></p>
              <input type="password" className='signcardiinput' autoComplete required />
              {/* <CountrySelector /> */}
            </div>
            <div className='signcardcontentir'>
              <p> <input type="checkbox" /> By checking this box I agree to the <Link>Terms</Link> and <Link>privacy policy</Link></p>
            </div>
            <div className='signcardsub'>
              <a className='ton tin'>Submit</a>
           </div>
        </form>
        </div>
  )
}

export default Signupcard