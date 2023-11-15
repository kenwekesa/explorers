import React from 'react'
import Footer from '../footer/footer'
import Mmprice from '../pricing/Mmprice'
import Landabout from './Landabout'
import Landingnav from './Landingnav'
import Mlandingindustry from './Mlandingindustry'
import Mlandingservices from './Mlandingservices'
import Mlonboard from './Mlonboard'

const Mlanding = () => {
  return (
    <div>
    <Landingnav />
    <Mlandingservices />
    <Landabout />
      {/* <Mlandingservices /> */}
    <Mlandingindustry />
    <Mlonboard />
    {/* <Mlandingindustry /> */}
    <Mmprice />
    <Footer /> 
    </div>
  )
}

export default Mlanding