import React from 'react'
import "./Abouthow.css"
import SmallAboutsecond from './smallcards/SmallAboutsecond'
import SmallAboutthird from './smallcards/SmallAboutthird'
import SmallAboutforth from './smallcards/SmallAboutforth'
import SmallAboutfirst from './smallcards/SmallAboutfirst'

const Abouthow = () => {
  return (
      <div className='abmain'>
          <div className='abmainp'>
              <p>Why Work <span className='abspan'>With</span> <br></br><span className='abspan'>Us</span></p>
          </div>
          <div className='mainab'>
              <div>
              {/* <div className='absor'> */}
                  {/* <p><img src={coins} alt='logo' loading="lazy" className='abimg'/></p>
                  <p className='abTop'>Pay for what you need</p>
                  <p>No paying for downtime or slow time. When the clock is on, your VA is working.</p>
                  <a href="home.html" className='ton'>Hire VA</a> */}
                  <SmallAboutfirst />
              </div>
              <div>
              {/* <div className='absor'> */}
                  {/* <p><img src={timeone} alt='logo' loading="lazy" className='abimg'/></p>
                  <p className='abTop'>Spend your time wisely</p>
                  <p>No paying for downtime or slow time. When the clock is on, your VA is working..</p>
                  <a href="home.html" className='ton'>Hire VA</a> */}
                  <SmallAboutsecond />
              </div>
              <div>
              {/* <div className='absor'> */}
                  {/* <p><img src={waitingone} alt='logo' loading="lazy" className='abimg'/></p>
                  <p className='abTop'>Have some rest</p>
                  <p>No paying for downtime or slow time. When the clock is on, your VA is working.</p>
                  <a href="home.html" className='ton'>Hire VA</a> */}
                  <SmallAboutthird />
              </div>
               <div>
                {/* <div className='absor'> */}
                  {/* <p><img src={airplane} alt='logo' loading="lazy" className='abimg'/></p>
                  <p className='abTop'>Surprise Yourself</p>
                  <p>No paying for downtime or slow time. When the clock is on, your VA is working.</p>
                  <a href="home.html" className='ton'>Hire VA</a> */}
                  <SmallAboutforth />
              </div>
          </div>
    </div>
  )
}

export default Abouthow