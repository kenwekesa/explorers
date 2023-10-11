import React from 'react'
import "./addcard.css"
// import image from "../../images/vaone.jpg"

const Addsecondard = () => {
  
  return (
    <div className='ascontactform'>
        <div className='asmcontactimg'>
           {/* <img src={image} alt="logo" loading="lazy" /> */}
        </div> 
          <div >
            {/* <p className='mtpfi'>We would love to hear from you</p> */}
            <div className='ascontfrm'>
                  <div className='ascontactinputfield'>
                  <p className='aspcontfrmpara'>Time Zone</p>
                  <input placeholder='First name' type="text" />
                  <p className='aspcontfrmpara'>Language</p>
                  <input placeholder='Last name'type="text"/>
                  </div>
                  {/* <div className='contactinputfield'>
                  <p className='aspcontfrmpara'>Get started with our virtual assistant services</p>
                  <input placeholder='First name' type="email" /> */}
                  {/* <p className='mcontfrmpara'>Get started with our virtual assistant services</p>
                  <input placeholder='Last name'type="phone"/> */}
                  {/* </div> */}
                  {/* <div> */}
                  {/* <h1>Country Selector</h1> */}
                  {/* <CountrySelector /> */}
                 {/* </div> */}
                  <p className='aspcontfrmparai'>Role Requirements</p>
                  <div className='ascontacttext'>
                    <textarea placeholder='Message' className='ascontacttextareainput' />  
                  </div>
                  {/* <div className='contactpar'>
                      <p><span className='contactsrpasno'>Looking for a job?</span> Please email: <span className='contactsrpasnoi'>career@virtuals.com</span></p>
                  </div> */}
                  <div className='ascost'>
                      <p>Total Cost: <span>$80000</span></p>
                  </div>
                  <div className='ascontabutton'>
                      <a className='ton tin'>Submit Application</a>
                  </div>
            </div>
        </div>  
    </div>
  )
}

export default Addsecondard