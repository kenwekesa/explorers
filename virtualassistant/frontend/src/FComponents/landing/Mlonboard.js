import React from 'react'
import Mlandcard from './Mlandcard'
import "./Mlonboard.css"

const Mlonboard = () => {
  return (
    <div className='mlonboard'>
      <div className='mlonbordone'>
        <p>How it works</p>
      </div>
      <div className='mlonboardtwo'>
       <Mlandcard />
      </div>
    </div>
  )
}

export default Mlonboard