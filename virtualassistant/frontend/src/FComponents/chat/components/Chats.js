// import { doc, onSnapshot } from 'firebase/firestore'
// import React, { useContext, useEffect, useState } from 'react'
// import { db } from '../../../firebase'
// import image from "../../../images/vmainpage.jpg"
// import { ChatAuthContext } from '../chatContext/ChatAuthContext'
// import { ChatsContext } from '../chatContext/ChatsContext'
// import "./chats.css"

// const Chats = () => {

//   const [chats, setChats] = useState([])

//   const currentUser = useContext(ChatAuthContext)
//   const {dispatch} = useContext(ChatsContext)

//   useEffect(() => {
//     const getChats = () => {
    
//       const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
//         setChats(doc.data())
//       })

//       return () => {
//         unsub()
//       }
//     }

//      currentUser.uid && getChats()
    
//   }, [currentUser.uid])

//   const handleSelect = (us) => {
//     dispatch({type:"CHANGE_USER", payload:us})
//   }

//   return (
//       <div className='chats'>
//       {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => {
//         <div className='userChat' key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)}>
//             <img src={chat[1].userInfo.photoURL} alt="logo" />
//             <div className='userChatInfo'>
//             <span>{chat[1].userInfo.displayName}</span> <br />
//             <span className='userschats'>{chat[1].lastMessage?.text}</span>
//             </div>
//           </div> })}
//       </div>
//   )
// }

// export default Chats


import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { db } from '../../../firebase';
import image from "../../../images/vmainpage.jpg";
import { ChatAuthContext } from '../chatContext/ChatAuthContext';
import { ChatsContext } from '../chatContext/ChatsContext';
import "./chats.css";

const Chats = () => {
  const [chats, setChats] = useState({});

  const currentUser = useContext(ChatAuthContext);
  const { dispatch } = useContext(ChatsContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data() || {});
      });

      return unsub;
    };

    if (currentUser.uid) {
      const unsubscribe = getChats();
      return () => {
        unsubscribe();
      };
    }
  }, [currentUser.uid]);

  const handleSelect = (us) => {
    dispatch({ type: "CHANGE_USER", payload: us });
  };

  return (
    <div className='chats'>
      {Object.entries(chats).sort((a, b) => b[1].date - a[1].date).map(([chatId, chat]) => (
        <div className='userChat' key={chatId} onClick={() => handleSelect(chat.userInfo)}>
          <img src={chat.userInfo.photoURL} alt="logo" />
          <div className='userChatInfo'>
            <span>{chat.userInfo.displayName}</span> <br />
            <span className='userschats'>{chat.lastMessage?.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
