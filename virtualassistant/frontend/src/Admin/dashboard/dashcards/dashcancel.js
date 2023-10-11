import React from 'react'
import img4 from "../../../images/pending.png"
import "./dashcards.css"


const Dashcancel = () => {
  return (
    <div>
      <div className='dashcard'>
          <p>Pending Plans</p>
          <img src={img4} alt='logo' />
          <p>30</p>
        </div>
    </div>
  )
}

export default Dashcancel