import React, { useContext } from 'react'
import { ChatAuthContext } from '../chatContext/ChatAuthContext'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'
import "./Homes.css"

const ChatHome = () => {

  const { currentUser } = useContext(ChatAuthContext)
  
  console.log(currentUser)

  return (
    <div className='home'>
       <div className='container'>
         <Sidebar />
         <Chat />     
       </div>
    </div>
  )
}

export default ChatHome