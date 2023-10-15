// import React, { useContext, useState } from 'react'
// import add from "../../../images/addimagetwo.png"
// import { ChatsContext } from '../chatContext/ChatsContext'
// import "./chat.css"
// import Input from './Input'
// import Messages from './Messages'

// const Chat = () => {


//   const {data} = useContext(ChatsContext)

//   return (
//     <div className='chat'>
//     <div className='chatInfo'>
//         <span>{data.user?.displayName }</span> 
//         <div className='chatIcons'>
//             <img src={add} alt="add" />      
//          </div>       
//         </div>
//       <Messages />
//       <Input />
//     </div>
//   )
// }

// export default Chat

import React, { useContext } from 'react';
import add from "../../../images/addimagetwo.png";
import { ChatsContext } from '../chatContext/ChatsContext';
import "./chat.css";
import Input from './Input';
import Messages from './Messages';

const Chat = () => {
  const { data } = useContext(ChatsContext);

  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
        <div className='chatIcons'>
          <img src={add} alt="add" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
