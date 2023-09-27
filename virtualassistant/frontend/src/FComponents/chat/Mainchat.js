import React from 'react'
import Chat from './components/Chat'
import Sidebar from './components/Sidebar'
import "./Mainchat.css"

const Mainchat = () => {
  return (
    <div className='mainchat'>
        <div className='container'>
            <Sidebar />
            <Chat />  
        </div>
    </div>
  )
}

export default Mainchat