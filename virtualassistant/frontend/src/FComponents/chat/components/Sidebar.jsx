import React from 'react'
import "./chat.css"
import Chats from './Chats'
import Navbar from './Navbar'
import ChatSearch from './Search'

const Sidebar = () => {
  return (
    <div className='mainsidebar'>
      <Navbar />
      <ChatSearch />
      <Chats />
    </div>
  )
}

export default Sidebar