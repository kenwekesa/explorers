import React from 'react'
import Chat from './components/Chat'
import Sidebar from './components/Sidebar'
import "./Mainchat.css"
import ChatHome from './pages/Home'

const Mainchat = () => {
  return (
    <div>
      <div>
        <ChatHome />
      </div>
    </div>
  )
}

export default Mainchat