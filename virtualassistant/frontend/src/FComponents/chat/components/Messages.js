// import React, { useEffect } from 'react'
// import Message from './Message'
// import "./Messages.css"
// import { useState, useContext } from 'react'
// import { ChatsContext } from '../chatContext/ChatsContext'
// import { doc, onSnapshot } from 'firebase/firestore'
// import { db } from '../../../firebase'

// const Messages = () => {

//   const [messages, setMessages] = useState([])
//   const { data } = useContext(ChatsContext)

//   useEffect(() => {
//     const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
//       doc.exists() && setMessages(doc.data().messages)
//     })

//     return () => {
//       unSub()
//     }
//   }, [data.chatId])
  
//   return (
//     <div className='messages'>

//       {messages.map(m => (
//         <Message messages={m} key={m.id} />
//       ))}
//     </div>
//   )
// }

// export default Messages

import React, { useEffect } from 'react';
import Message from './Message';
import "./Messages.css";
import { useState, useContext } from 'react';
import { ChatsContext } from '../chatContext/ChatsContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatsContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className='messages'>
      {messages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
}

export default Messages;
