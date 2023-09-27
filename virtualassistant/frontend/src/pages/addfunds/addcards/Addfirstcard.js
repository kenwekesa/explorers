import React from 'react'
import "./addcard.css"
// import image from "../../images/vaone.jpg"
// import CountrySelector from './Contactcountry';

const Addfirstcard = () => {


  return (
    <div className='afcontactform'>
        <div className='ascontactimg'>
           {/* <img src={image} alt="logo" loading="lazy" /> */}
        </div> 
          <div >
            {/* <p className='mtpfi'>We would love to hear from you</p> */}
            <div className='afcontfrm'>
                  <p className='ascontfrmpara'>Finish the hiring process</p>
                  <div className='ascontactinputfield'>
                  <p className='aspcontfrmpara'>Service</p>
                  <input placeholder='First name' type="text" />
                  <p className='aspcontfrmpara'>Plan</p>
                  <input placeholder='Last name'type="text"/>
                  {/* </div>
                  <div className='contactinputfield'> */}
                  <p className='aspcontfrmpara'>Assistants</p>
                  <input placeholder='First name' type="email" />
                  <p className='aspcontfrmpara'>Period</p>
                  <input placeholder='Last name' type="phone" />
                  <p className='aspcontfrmpara'>Role Title</p>
                  <input placeholder='Last name'type="phone"/>
                  {/* </div>
                  <div> */}
                  {/* <h1>Country Selector</h1> */}
                  {/* <CountrySelector /> */}
                  </div>
                  {/* <div className='ascontacttext'>
                    <textarea placeholder='Message' className='ascontacttextareainput' />  
                  </div>
                  <div className='contactpar'>
                      <p><span className='contactsrpasno'>Looking for a job?</span> Please email: <span className='contactsrpasnoi'>career@virtuals.com</span></p>
                  </div>
                  <div className='contabutton'>
                      <a className='ton'>Submit</a>
                  </div> */}
            </div>
        </div>  
    </div>
  )
}

export default Addfirstcard