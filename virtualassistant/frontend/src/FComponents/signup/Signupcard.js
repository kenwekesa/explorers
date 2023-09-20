import React from 'react'
import "./Signupcard.css"
import { Link } from 'react-router-dom'
import CountrySelector from '../contact/Contactcountry'

const Signupcard = () => {
  return (
   <div className='cardsignupone'>
            <p className='cardmainsip'>All  fields are required</p>
            <div className='signcardcontent'>
              <p>First Name <span>(required)</span></p>
              <input className='signcardiinput' required/>
            </div>
            <div className='signcardcontent'>
              <p>Last Name <span>(required)</span></p>
              <input className='signcardiinput' required/>
            </div>
            <div className='signcardcontent'>
              <p>Email Address <span>(required)</span></p>
              <input className='signcardiinput' required/>
            </div>
            <div className='signcardcontent'>
              <p>Organization's Name <span>(required)</span></p>
              <input className='signcardiinput' required/>
            </div>
            <div className='signcardcontent'>
              <p>Phone Number <span>(required)</span></p>
              <input className='signcardiinput' required/>
            </div>
            <div className='signcardcontent'>
              <p>Where are you located ?<span>(required)</span></p>
              <input className='signcardiinput' required/>
            </div>
            <div className='signcardcontent'>
              <p>What services are you most interested in ? <span>(required)</span></p>
              <input className='signcardiinput' required/>
            </div>
            <div className='signcardcontent'>
              <p>How did you hear about us <span>(required)</span></p>
              <input className='signcardiinput' required/>
            </div>
            <div className='signcardcontent'>
              <p>Set account password <span>(required)</span></p>
              <input className='signcardiinput' required/>
            </div>
            <div className='signcardcontent'>
              <p>Match account password <span>(required)</span></p>
              <input className='signcardiinput' required />
              {/* <CountrySelector /> */}
            </div>
            <div className='signcardcontentir'>
              <p> <input type="checkbox" /> By checking this box I agree to the <Link>Terms</Link> and <Link>privacy policy</Link></p>
            </div>
            <div className='signcardsub'>
              <a className='ton'>Submit</a>
            </div>
          </div>
  )
}

export default Signupcard