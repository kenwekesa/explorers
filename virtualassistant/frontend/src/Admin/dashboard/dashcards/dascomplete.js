import React from 'react'
import img5 from "../../../images/clients.png"
import "./dashcards.css"


const Dascomplete = () => {
  return (
    <div>
      <div className='dashcard'>
          <p>Total Clients</p>
          <img src={img5} alt='logo' />
          <p>28</p>
        </div>
    </div>
  )
}

export default Dascomplete