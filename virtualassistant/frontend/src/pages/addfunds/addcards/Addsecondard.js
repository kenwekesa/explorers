import React from 'react'
import "./addcard.css"
// import image from "../../images/vaone.jpg"

const Addsecondard = () => {
  
  return (
    <div className='ascontactform'>
        <div className='asmcontactimg'>
        </div> 
          <div >
            <div className='ascontfrm'>
                  <div className='ascontactinputfield'>
                  <p className='aspcontfrmpara'>Time Zone</p>
                  <input placeholder='First name' type="text" />
                  <p className='aspcontfrmpara'>Language</p>
                  <input placeholder='Last name'type="text"/>
                  </div>
                  <p className='aspcontfrmparai'>Role Requirements</p>
                  <div className='ascontacttext'>
                    <textarea placeholder='Message' className='ascontacttextareainput' />  
                  </div>
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