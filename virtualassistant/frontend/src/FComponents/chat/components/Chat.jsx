import React from 'react'
import "./chat.css"
import admin from "../../../images/admin.png"
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chatcanvas'>
      <div className='canvaschatInfo'>
        <span>Jane</span>
        <div className='ChatIcons'>
          <img src={admin} alt="logo"/>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat