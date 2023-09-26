import React from 'react'
import img3 from "../../../images/In Progress.png"
import "./dashcards.css"


const Active = () => {
  return (
    <div>
      <div className='dashcard'>
          <p>Active plans</p>
          <img src={img3} alt='logo'/>
        </div>
    </div>
  )
}

export default Active