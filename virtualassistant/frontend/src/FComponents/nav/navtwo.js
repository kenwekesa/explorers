import React from 'react'
import { Link } from 'react-router-dom'
import Navbartwo from '../navbar/navbartwo'
import "./navtwo.css"

const Navtwo = () => {

    return (
    <div className='thenavi'>
      <div className='navtwo'>
        <Navbartwo />
      </div>
      <div>
          <div className='signfirpar'>
            <p className='signfirpari'>Get Started with the Hiring Process</p>
            <p className='signfirparie'>It can’t get easier than this</p>
          </div> 
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
              <input className='signcardiinput' required/>
            </div>
            <div className='signcardcontentir'>
              <p> <input type="checkbox" /> By checking this box I agree to the <Link>Terms</Link> and <Link>privacy policy</Link></p>
            </div>
            <div className='signcardsub'>
              <a className='ton'>Submit</a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navtwo