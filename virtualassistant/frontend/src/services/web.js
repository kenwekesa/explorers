import React from 'react'
import "./web.css"
import SmallServiceforth from './smallcards/SmallServiceforth'
import SmallServicethird from './smallcards/SmallServicethird'
import SmallServicesecond from './smallcards/SmallServicesecond'
import SmallServicefirst from './smallcards/SmallServicefirst'

const Web = () => {
  return (
    <div className='webmain'>
          <div className='mainweb'>
              <div>
              {/* <div className='websor'> */}
                  {/* <p><img src={coins} alt='logo' loading="lazy" className='webimg'/></p>
                  <p className='webTop'>Pay for what you need</p>
                  <p>No paying for downtime or slow time. When the clock is on, your VA is working.</p>
                  <a href="home.html" className='ton'>Hire VA</a> */}
                  {/* <FirstCard /> */}
                  <SmallServicefirst />
              </div>
               <div>
              {/* <div className='websor'> */}
                  {/* <p><img src={timeone} alt='logo' loading="lazy" className='webimg'/></p>
                  <p className='webTop'>Spend your time wisely</p>
                  <p>No paying for downtime or slow time. When the clock is on, your VA is working..</p>
                  <a href="home.html" className='ton'>Hire VA</a> */}
                  <SmallServicesecond />
              </div>
              <div>
              {/* <div className='websor'> */}
                  {/* <p><img src={waitingone} alt='logo' loading="lazy" className='webimg'/></p>
                  <p className='webTop'>Have some rest</p>
                  <p>No paying for downtime or slow time. When the clock is on, your VA is working.</p>
                  <a href="home.html" className='ton'>Hire VA</a> */}
                  <SmallServicethird />
              </div>
              <div>
              {/* <div className='websor'> */}
                  {/* <p><img src={airplane} alt='logo' loading="lazy" className='webimg'/></p>
                  <p className='webTop'>Surprise Yourself</p>
                  <p>No paying for downtime or slow time. When the clock is on, your VA is working.</p>
                  <a href="home.html" className='ton'>Hire VA</a> */}
                  <SmallServiceforth />
              </div>
          </div>
    </div>
  )
}

export default Web