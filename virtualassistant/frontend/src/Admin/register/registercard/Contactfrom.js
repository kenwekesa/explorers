import React from 'react'
import "./Contacform.css"
import image from "../../../images/vaone.jpg"


const Contactfrom = () => {

  return (
    <div className='admin_main_contact_form'>
    <div className='admin_main_register_form_update'>Register a user</div>
    <div className='admin_contact_form_outline'>
      <div className='mcontactimg'>
          <div className='admin_register_form'>
                  <p className='admin_contact_form_paragraph'>Provide user details</p>
                  <div className='admin_contact_input_field'>
                  <input placeholder='First name' type="text"/>
                  <input placeholder='Last name'type="text"/>
                  </div>
                  <div className='admin_contact_input_field'>
                  <input placeholder='User email'type="email"/>
                  <input placeholder='User Contact' type="phone" />
                  <input placeholder='User Industry'type="phone"/>
                  </div>
                  <div className='admin_contact_input_field'>
                  <input placeholder='Choose user type'type="email"/>
                  <input placeholder='Password'type="password"/>
                  </div>
                  {/* <div>
                  <h1>Country Selector</h1>
                  <CountrySelector />
                  </div> */}
                  {/* <div className='admin_contact_textarea'>
                    <textarea placeholder='Update content - 500 words' className='contacttextareainput' />  
                  </div> */}
                  {/* <div className='contactpar'>
                      <p><span className='contactsrpasno'>Looking for a job?</span> Please email: <span className='contactsrpasnoi'>career@virtuals.com</span></p>
                  </div> */}
                  <div className='admin_contact_button'>
                      <a className='ton tin'>Register user</a>
                  </div>
            </div>
        </div> 
      </div>
    </div>
  )
}

export default Contactfrom