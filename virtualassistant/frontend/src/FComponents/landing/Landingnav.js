import React from 'react'
import { Link } from 'react-router-dom'
import MainNav from '../navbar/navbar'
import "./Landingnav.css"

const Landingnav = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

    return (
    <div className='mathemlanding'>
      <div className='mamlanding'>
        <MainNav />
        </div>
        <div className='mamlandingcontent_main'>
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
        <Link to="/signup" className='ton tin' onClick={scrollToTop}>Hire VA</Link>
        </div>
    </div>
  )
}

export default Landingnav