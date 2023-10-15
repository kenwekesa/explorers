import React from 'react'
import "./Contacform.css"


const Contactfrom = () => {

  return (
    <div className='admin_main_contact_form'>
    <div className='admin_main_contact_form_update'>Updates</div>
    <div className='mcontactform'>
      <div className='mcontactimg'>
          <div className='admin_contact_form'>
                  <p className='admin_contact_form_paragraph'>Provide Assistants Updates</p>
                  <div className='admin_update_input_field'>
                  <input placeholder='Update title - 100 words' type="text"/>
                  {/* <input placeholder='Last name'type="text"/> */}
                  </div>
                  {/* <div className='contactinputfield'>
                  <input placeholder='First name'type="email"/>
                  <input placeholder='Last name'type="phone"/>
                  </div> */}
                  {/* <div>
                  <h1>Country Selector</h1>
                  <CountrySelector />
                  </div> */}
                  <div className='admin_contact_textarea'>
                    <textarea placeholder='Update content - 500 words' className='contacttextareainput' />  
                  </div>
                  {/* <div className='contactpar'>
                      <p><span className='contactsrpasno'>Looking for a job?</span> Please email: <span className='contactsrpasnoi'>career@virtuals.com</span></p>
                  </div> */}
                  <div className='admin_contact_button'>
                      <a className='ton tin'>Submit Assistants Update</a>
                  </div>
            </div>
        </div> 
          <div >
            {/* <p className='mtpfi'>We would love to hear from you</p> */}
            <div className='admin_contact_form'>
                  <p className='admin_contact_form_paragraph'>Provide Client Updates</p>
                  <div className='admin_update_input_field'>
                  <input placeholder='Update title - 100 words' type="text"/>
                  {/* <input placeholder='Last name'type="text"/> */}
                  </div>
                  {/* <div className='contactinputfield'>
                  <input placeholder='First name'type="email"/>
                  <input placeholder='Last name'type="phone"/>
                  </div> */}
                  {/* <div>
                  <h1>Country Selector</h1>
                  <CountrySelector />
                  </div> */}
                  <div className='admin_contact_textarea'>
                    <textarea placeholder='Update content - 500 words' className='contacttextareainput' />  
                  </div>
                  {/* <div className='contactpar'>
                      <p><span className='contactsrpasno'>Looking for a job?</span> Please email: <span className='contactsrpasnoi'>career@virtuals.com</span></p>
                  </div> */}
                  <div className='admin_contact_button'>
                      <a className='ton tin'>Submit Client Update</a>
                  </div>
            </div>
        </div>  
      </div>
    </div>
  )
}

export default Contactfrom