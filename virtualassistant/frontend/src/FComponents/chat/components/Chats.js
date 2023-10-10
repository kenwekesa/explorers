import React from 'react'
import image from "../../../images/vmainpage.jpg"
import "./chats.css"

const Chats = () => {
  return (
      <div className='chats'>
         <div className='userChat'>
            <img src={image} alt="logo" />
            <div className='userChatInfo'>
            <span>Jane</span> <br />
            <span className='userschats'>Hello Thomas!</span>
            </div>
          </div>
      </div>
  )
}

export default Chats