import React from 'react'
import img5 from "../../../images/Checkmark.png"
import "./dashcards.css"


const Dascomplete = () => {
  return (
    <div>
      <div className='dashcard'>
          <p>Completed plans</p>
          <img src={img5} alt='logo'/>
        </div>
    </div>
  )
}

export default Dascomplete