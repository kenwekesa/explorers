import React from 'react'
import add from "../../../images/addimagetwo.png"
import "./chat.css"
import Input from './Input'
import Messages from './Messages'

const Chat = () => {
  return (
    <div className='chat'>
    <div className='chatInfo'>
        <span>Jane</span> 
        <div className='chatIcons'>
            <img src={add} alt="add" />      
         </div>       
        </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat