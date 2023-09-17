import React from 'react'
import "./industriesOperate.css"
import Industriesfcard from './smallcards/industriesfcard'
import Industriesfocard from './smallcards/industriesfocard'
import Industriesscard from './smallcards/industriesscard'
import Industriestcard from './smallcards/industriestcard'

const IndustriesOperate = () => {
  return (
      <div className='industriesoperate'>
          <div className='industriesopone'>
              <p className='industriesMcol'>Industries <span className="spancolor1">we operate</span> In</p>
          </div>
          <div className='industriesoptwo'>
          <p>We serve various industries, with high end focused virtual assistants support. Hire, professionals<br></br>
            from  VA</p>
          </div>
          <div className='mainindustrieso'>
              <div>
                  <Industriesfcard />
              </div>
              <div>
                  <Industriesscard />
              </div>
              <div>
                  <Industriestcard />
              </div>
              <div>
                  <Industriesfocard />
              </div>
          </div>
      </div>
  )
}

export default IndustriesOperate