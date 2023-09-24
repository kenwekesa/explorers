import React from 'react'
import "./Contacform.css"
import image from "../../images/vaone.jpg"
import CountrySelector from './Contactcountry';

const Contactfrom = () => {

  return (
    <div className='mcontactform'>
        <div className='mcontactimg'>
           <img src={image} alt="logo" loading="lazy" />
        </div> 
          <div >
            <p className='mtpfi'>We would love to hear from you</p>
            <div className='mcontfrm'>
                  <p className='mcontfrmpara'>Get started with our virtual assistant services</p>
                  <div className='contactinputfield'>
                  <input placeholder='First name' type="text"/>
                  <input placeholder='Last name'type="text"/>
                  </div>
                  <div className='contactinputfield'>
                  <input placeholder='First name'type="email"/>
                  <input placeholder='Last name'type="phone"/>
                  </div>
                  <div>
                  {/* <h1>Country Selector</h1> */}
                  <CountrySelector />
                  </div>
                  <div className='contacttext'>
                    <textarea placeholder='Message' className='contacttextareainput' />  
                  </div>
                  <div className='contactpar'>
                      <p><span className='contactsrpasno'>Looking for a job?</span> Please email: <span className='contactsrpasnoi'>career@virtuals.com</span></p>
                  </div>
                  <div className='contabutton'>
                      <a className='ton'>Submit</a>
                  </div>
            </div>
        </div>  
    </div>
  )
}

export default Contactfrom