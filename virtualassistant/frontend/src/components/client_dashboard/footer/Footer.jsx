import React from 'react'

import './footer.scss'
import { FacebookOutlined, Twitter } from '@mui/icons-material'

function Footer() {
  return (
    <div className='footer'>
      <div className="leftdiv">
          <span>All rights reserved</span>
      </div>
      <div className="socialsdiv">
        <FacebookOutlined/>
        <Twitter/>
      </div>
    </div>
  )
}

export default Footer