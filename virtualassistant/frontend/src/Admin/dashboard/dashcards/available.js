import React from 'react'
import img6 from "../../../images/cashinhand.png"
import "./dashcards.css"


const Available = () => {
  return (
    <div>
      <div className='dashcard'>
          <p>Available funds</p>
          <img src={img6} alt='logo' />
          <p>$1400</p>
        </div>
    </div>
  )
}

export default Available