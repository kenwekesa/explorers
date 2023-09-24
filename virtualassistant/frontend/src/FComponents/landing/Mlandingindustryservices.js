import React from 'react'
import "./Mlandingindustries.css"
import Mlecommerce from './smallcards/Mlecommerce'
import Mlhealthcare from './smallcards/Mlhealthcare'
import Mlinsurance from './smallcards/Mlinsurance'
import Mlrealestate from './smallcards/Mlrealestate'

const Mlandingindustryservices = () => {

  return (
    <div className='mlandingservicesi'> 
      <div>
        <p className='mlandpara'>Industries <span className='mlandparei'>we operate</span> in</p> 
        <p className='mlandparagr'>We provide various industries, with high end focused support<br></br>
         <span className='mlandparagri'> Hire, professionals from  VA </span></p>
      </div>
          <div className='mlandservone'>
        <Mlinsurance />
        <Mlhealthcare />
        <Mlrealestate />
        <Mlecommerce />      
        </div> 
        <div className='mlandserbtn'>
        {/* <a href='home.html' className='ton tin'>View all industries</a> */}
        {/* <Link className='ton tin' onClick={scrollToTop} to="/industries">View all industries</Link> */}
      </div>    
    </div>
  )
}

export default Mlandingindustryservices