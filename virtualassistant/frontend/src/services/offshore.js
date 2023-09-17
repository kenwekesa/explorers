import React from 'react'
import "./offshore.css"
import Servicecard from './servicecard'

const Offshore = () => {
    return (
    // creating the two key parts of the offshore component
        <div className='offshore'>
        <div className='offfirst'>
             {/* The first part */}
            <p>Choose the plan, <span className='offcolor'>that best suit your</span> business  <br></br> Model</p> 
        </div>
            {/* The second part */}
        <div className='offsecond'>
            <div className='ofone'>
              <p>Offshore <span className='offcolor'>Plan</span></p>      
            </div>
            <div className='ofsecond'>
              <Servicecard />      
            </div>
        </div>
    </div>
  )
}

export default Offshore