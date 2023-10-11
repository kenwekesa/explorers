import React from 'react'
import img5 from "../../../images/checkmark.png"
import "./dashcards.css"


const Dascomplete = () => {
  return (
    <div>
      <div className='dashcard'>
          <p>Completed plans</p>
          <img src={img5} alt='logo' />
          <p>18</p>
        </div>
    </div>
  )
}

export default Dascomplete