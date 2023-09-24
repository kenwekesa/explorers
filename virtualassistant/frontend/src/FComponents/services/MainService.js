import React from 'react'
import Footer from '../footer/footer'
import Nav from '../nav/Nav'
import Offshore from './offshore'
import Web from './web'
import Webshore from './webshore'

const MainService = () => {
  return (
    <div>
      <Nav />
      <Offshore />
      <Web />
      <Webshore />
      <Footer />
    </div>
  )
}

export default MainService