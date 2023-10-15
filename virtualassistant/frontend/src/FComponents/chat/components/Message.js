// import React, {useContext, useEffect, useRef} from 'react'
// import "./Message.css"
// import message from "../../../images/vmainpage.jpg"
// import { ChatAuthContext } from '../chatContext/ChatAuthContext'
// import { ChatsContext } from '../chatContext/ChatsContext'

// const Message = () => {

//   const { currentUser } = useContext(ChatAuthContext)
//   const { data } = useContext(ChatsContext)
  
//   const ref = useRef()

//   useEffect(() => {
//     ref.current?.scrollIntoView({behavior:"smooth"})
//   }, [message])

//   return (
//     <div ref={ref} className={`message &{message.senderId === currentUser.uid && "owner"}`}>
//       <div className='messageInfo'>
//         <img src={message.senderId === currentUser.uid ?
//         currentUser.photoURL: data.user.photoURL} alt="" />
//         <span>just now</span>
//       </div>
//       <div className='messageContent'>
//         <p>{ message.text}</p>
//         {message.img && <img src={message.img} alt='' />}
//       </div>
//     </div>
//   )
// }

// export default Message

import React, { useContext, useEffect, useRef } from 'react';
import "./Message.css";
import message from "../../../images/vmainpage.jpg";
import { ChatAuthContext } from '../chatContext/ChatAuthContext';
import { ChatsContext } from '../chatContext/ChatsContext';

const Message = ({ message }) => {
  const { currentUser } = useContext(ChatAuthContext);
  const { data } = useContext(ChatsContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div ref={ref} className={`message ${message.senderId === currentUser.uid ? "owner" : ""}`}>
      <div className='messageInfo'>
        <img src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="" />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt='' />}
      </div>
    </div>
  );
};

export default Message;
