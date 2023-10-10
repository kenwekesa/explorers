import React from 'react'
import "./Message.css"
import message from "../../../images/vmainpage.jpg"

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src={message} alt="" />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>hello</p>
        <img src={message} alt=''/>
      </div>
    </div>
  )
}

export default Message