import React from 'react'
import logo from "../../../images/vaco.jpg"

const Chats = () => {
  return (
    <div className='chats'>
      <div className='userChat'>
        <img src={logo} alt='alt' loading="eager" />
        <div className='userChatInfo'>
          <span>Jane</span>
          <p>Hello Thomas</p>
        </div>
      </div>
    </div>
  )
}

export default Chats