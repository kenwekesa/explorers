import React from 'react'
import Servicecardtwo from './servicecardtwo'

const Webshore = () => {
  return (
    <div className='offshore'>
        <div className='offfirst'>
             {/* The first part */}
            {/* <p>Choose the plan, <span className='offcolor'>that best suit your</span> business  <br></br> Model</p>  */}
        </div>
            {/* The second part */}
          <div className='offsecond'>
            <div className='ofsecond'>
              <Servicecardtwo />      
            </div>
            <div className='ofone ofone-ofone'>
              <p>Web <span className='offcolor'>Plan</span></p>      
            </div>
        </div>
    </div>
  )
}

export default Webshore