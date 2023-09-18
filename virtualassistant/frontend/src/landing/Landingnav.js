import React from 'react'
import MainNav from '../navbar/navbar'
import "./Landingnav.css"

const Landingnav = () => {

    return (
    <div className='mathemlanding'>
      <div className='mamlanding'>
        <MainNav />
        </div>
        <div className='mamlandingcontent'>
        <p>Hire your <span className='Landingspancolor1'>professional <br></br> 
        virtual</span> assistant</p>
        </div>
        <div className='mamealanding'>
        <div className='memlandcontent'>
         <p>Take your business to the next level, upscale higher for better outcomes</p>
            </div>
        <div className='memlandcontenti'>
         <p>Full time, part time, contract, freelance and full services payroll</p>
        </div>
        <div className='memlandcontente'>
         <p>Services starting <span className='landcolrone'>from $7.55</span></p>
        </div>
        <a href='home.html' className='ton tin'>Hire VA</a>
        </div>
    </div>
  )
}

export default Landingnav