import React from 'react'
import logo from "../../../images/vaco.jpg"

const Message = () => {
  return (
    <div className='chatmessage chatowner'>
      <div className='messageInfo'>
        <img src={logo} alt="logo" />
        <span>Just now</span>
      </div>
      <div className='messageContent'>
        <p>Hello brother, we should come down and do something...</p>
        <img src={logo} alt="logo"/>
      </div>
    </div>
  )
}

export default Message