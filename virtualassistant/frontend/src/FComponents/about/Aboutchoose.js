import React from 'react'
import Servicecard from '../services/servicecard'
import "./Aboutchoose.css"

const Aboutchoose = () => {

  return (
    <div className='offshore'>
        <div className='offfirst'>
             {/* The first part */}
            {/* <p>Choose the plan, <span className='offcolor'>that best suit your</span> business  <br></br> Model</p>  */}
        </div>
            {/* The second part */}
          <div className='offsecond'>
            <div className='ofsecond'>
              <Servicecard />      
            </div>
            <div className='ofone'>
              <p>Choose a <span className='offcolor'>Plan</span></p>      
            </div>
        </div>
    </div>
  )
}

export default Aboutchoose