import React from 'react'
import "./Mmprice.css"
import Pricecards from './pricecards/Pricecards'


const Mmprice = () => {
  return (
    <div className='mmprice'>
      <div>
        <p className='mmpri'>Choose your plan</p>
        <p className='mmpric'>Choose the plan that best fit your needs and see what <br/>
          our virtual assistants can do for your business.</p>
      </div>
      <Pricecards/>
    </div>
  )
}

export default Mmprice