import React from 'react'
import img7 from "../../../images/mymessages.png"
import "./dashcards.css"


const Dashmess = () => {
  return (
    <div>
      <div className='dashcard'>
          <p>New Messages</p>
          <img src={img7} alt='logo' />
          <p>42</p>
        </div>
    </div>
  )
}

export default Dashmess