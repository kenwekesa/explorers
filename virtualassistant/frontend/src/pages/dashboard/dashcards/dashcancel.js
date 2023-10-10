import React from 'react'
import img4 from "../../../images/cancel.png"
import "./dashcards.css"


const Dashcancel = () => {
  return (
    <div>
      <div className='dashcard'>
          <p>Cancelled Plans</p>
          <img src={img4} alt='logo'/>
        </div>
    </div>
  )
}

export default Dashcancel