import React from 'react'
import logo from "../../../images/vaco.jpg"

const ChatSearch = () => {
  return (
    <div className='chatsearch'>
      <div className='chatsearchform'>
        <input type="text" placeholder='find a user'/>
      </div>
      <div className='userChat'>
        <img src={logo} alt='alt' loading="eager" />
        <div className='userChatInfos'>
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default ChatSearch