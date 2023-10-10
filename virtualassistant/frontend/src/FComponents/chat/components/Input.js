import React from 'react'
import "./input.css"
import add from "../../../images/addimagefour.png"
import attach from "../../../images/attachimageone.png"

const Input = () => {
  return (
    <div className='input'>
        <div>
           <input text="text" placeholder='Type something...' />   
        </div>
        <div className='send'>
           <img src={attach} alt='attach' />
            <input type="file" style={{ display: "none" }} id="file" /> 
            <label htmlFor='file'>
               <img src={add} alt='add' />
              </label>  
            <button>Send</button>  
        </div>
    </div>
  )
}

export default Input