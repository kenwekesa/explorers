import React from 'react'
import img3 from "../../../images/inprogress.png"
import "./dashcards.css"


const Active = () => {
  return (
    <div>
      <div className='dashcard'>
          <p>Active plans</p>
          <img src={img3} alt='logo' />
          <p>25</p>
      </div>
    </div>
  )
}

export default Active