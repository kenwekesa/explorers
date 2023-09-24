import React from 'react'
import Abouthow from '../about/Abouthow'
import Footer from '../footer/footer'
import Mlandingindustryservices from '../landing/Mlandingindustryservices'
import Web from '../services/web'
import Bowner from './Bowner'
import Iecommerce from './Iecommerce'
import Ieducational from './Ieducational'
import Iestate from './Iestate'
import IHealth from './IHealth'
import Ilogistic from './Ilogistic'
import Industriesnav from './Industriesnav'
import IndustriesOperate from './industriesOperate'

const MainIndustries = () => {
  return (
    <div>
      <Industriesnav />
      {/* <IndustriesOperate /> */}
      <Mlandingindustryservices />
      <Bowner /> 
      <Iecommerce />
      <Web />
      <Ilogistic />
      <Ieducational />
      <Abouthow />
      <IHealth />
      <Iestate />
      <Footer />
    </div>
  )
}

export default MainIndustries