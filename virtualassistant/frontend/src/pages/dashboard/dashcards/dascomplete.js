import React from 'react'
import img5 from "../../../images/checkmark.png"
import "./dashcards.css"


const Dascomplete = () => {
  return (
    <div>
      <div className='dashcards'>
          <p>Completed plans</p>
          <img src={img5} alt='logo' />
          <p>8</p>
        </div>
    </div>
  )
}

export default Dascomplete