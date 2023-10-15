// import React, {useContext, useState} from 'react'
// import "./input.css"
// import add from "../../../images/addimagefour.png"
// import attach from "../../../images/attachimageone.png"
// import { ChatAuthContext } from '../chatContext/ChatAuthContext'
// import { ChatsContext } from '../chatContext/ChatsContext'
// import { async } from '@firebase/util'
// import { v4 as uuid } from 'uuid'
// import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore'
// import { db, storage } from '../../../firebase'
// import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

// const Input = () => {
//   const [text, setText] = useState("")
//   const [img, setImg] = useState(null)
//   const { currentUser } = useContext(ChatAuthContext)
//   const { data } = useContext(ChatsContext)
  
//   const handleSend = async () => {
//     if (img) {
//       const storageRef = ref(storage, uuid)
//       const uploadTask = uploadBytesResumable(storageRef, img)

//       uploadTask.on(
//         (error) => {
  
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
//             await updateDoc(doc(db, "chats", data.chatId), {
//            messages: arrayUnion({
//           id: uuid(),
//           text, 
//           senderId: currentUser.uid,
//              date: Timestamp.now(),
//           img: downloadURL
//           })
//           })
//         }
//       )
//     } else {
//       await updateDoc(doc(db, "chats", data.chatId), {
//         messages: arrayUnion({
//           id: uuid(),
//           text, 
//           senderId: currentUser.uid,
//           date: Timestamp.now()
//         })
//       })
//         }
        
//       await updateDoc(doc(db, "userChats", currentUser.uid), {
//         [data.chatId + ".lastMessage"]: {
//           text
//         }
//         [data.chatId+".date"]:serverTimestamp()
//       })

//        await updateDoc(doc(db, "userChats", currentUser.uid), {
//         [data.chatId + ".lastMessage"]: {
//           text
//         }
//         [data.chatId+".date"]:serverTimestamp()
//        })
       
//       setText("")
//       setImg(null)
//   }

//   return (
//     <div className='input'>
//         <div>
//            <input text="text" placeholder='Type something...' onChange={e=>setText(e.target.value)} value={text} />   
//         </div>
//         <div className='send'>
//            <img src={attach} alt='attach' />
//             <input type="file" style={{ display: "none" }} id="file" onChange={e=>setImg(e.target.files[0])} /> 
//             <label htmlFor='file'>
//                <img src={add} alt='add' />
//               </label>  
//             <button onClick={handleSend}>Send</button>  
//         </div>
//     </div>
//   )
// }

// export default Input


// import React, { useContext, useState } from 'react';
// import "./input.css";
// import add from "../../../images/addimagefour.png";
// import attach from "../../../images/attachimageone.png";
// import { ChatAuthContext } from '../chatContext/ChatAuthContext';
// import { ChatsContext } from '../chatContext/ChatsContext';
// import { v4 as uuid } from 'uuid';
// import {
//   arrayUnion,
//   doc,
//   serverTimestamp,
//   updateDoc,
//   Timestamp,
// } from 'firebase/firestore';
// import { db, storage } from '../../../firebase';
// import {
//   getDownloadURL,
//   ref,
//   uploadBytesResumable,
// } from 'firebase/storage';

// const Input = () => {
//   const [text, setText] = useState('');
//   const [img, setImg] = useState(null);
//   const { currentUser } = useContext(ChatAuthContext);
//   const { data } = useContext(ChatsContext);

//   const handleSend = async () => {
//     if (img) {
//       const storageRef = ref(storage, uuid());
//       const uploadTask = uploadBytesResumable(storageRef, img);

//       uploadTask.on('state_changed', null, (error) => {
//         console.error(error);
//       }, () => {
//         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
//           await updateDoc(doc(db, 'chats', data.chatId), {
//             messages: arrayUnion({
//               id: uuid(),
//               text,
//               senderId: currentUser.uid,
//               date: serverTimestamp(),
//               img: downloadURL,
//             }),
//           });
//         });
//       });
//     } else {
//       await updateDoc(doc(db, 'chats', data.chatId), {
//         messages: arrayUnion({
//           id: uuid(),
//           text,
//           senderId: currentUser.uid,
//           date: serverTimestamp(),
//         }),
//       });
//     }

//     const lastMessage = {
//       text,
//       date: serverTimestamp(),
//     };

//     await updateDoc(doc(db, 'userChats', currentUser.uid), {
//       [data.chatId + '.lastMessage']: lastMessage,
//       [data.chatId + '.date']: serverTimestamp(),
//     });

//     setText('');
//     setImg(null);
//   };

//   return (
//     <div className='input'>
//       <div>
//         <input
//           type="text"
//           placeholder='Type something...'
//           onChange={(e) => setText(e.target.value)}
//           value={text}
//         />
//       </div>
//       <div className='send'>
//         <img src={attach} alt='attach' />
//         <input
//           type='file'
//           style={{ display: 'none' }}
//           id='file'
//           onChange={(e) => setImg(e.target.files[0])}
//         />
//         <label htmlFor='file'>
//           <img src={add} alt='add' />
//         </label>
//         <button onClick={handleSend}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Input;


// import React, { useContext, useState } from 'react';
// import "./input.css";
// import add from "../../../images/addimagefour.png";
// import attach from "../../../images/attachimageone.png";
// import { ChatAuthContext } from '../chatContext/ChatAuthContext';
// import { ChatsContext } from '../chatContext/ChatsContext';
// import { v4 as uuid } from 'uuid';
// import {
//   arrayUnion,
//   doc,
//   serverTimestamp,
//   updateDoc,
//   Timestamp,
// } from 'firebase/firestore';
// import { db, storage } from '../../../firebase';
// import {
//   getDownloadURL,
//   ref,
//   uploadBytesResumable,
// } from 'firebase/storage';

// const Input = () => {
//   const [text, setText] = useState('');
//   const [img, setImg] = useState(null);
//   const { currentUser } = useContext(ChatAuthContext);
//   const { data } = useContext(ChatsContext);

//   const handleSend = async () => {
//     if (img) {
//       const storageRef = ref(storage, uuid());
//       const uploadTask = uploadBytesResumable(storageRef, img);

//       uploadTask.on('state_changed', null, (error) => {
//         console.error(error);
//       }, () => {
//         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
//           const messageData = {
//             id: uuid(),
//             text,
//             senderId: currentUser.uid,
//             date: serverTimestamp(),
//             img: downloadURL,
//           };
//           await updateDoc(doc(db, 'chats', data.chatId), {
//             messages: arrayUnion(messageData),
//           });
//         });
//       });
//     } else {
//       const messageData = {
//         id: uuid(),
//         text,
//         senderId: currentUser.uid,
//         date: serverTimestamp(),
//       };
//       await updateDoc(doc(db, 'chats', data.chatId), {
//         messages: arrayUnion(messageData),
//       });
//     }

//     const lastMessage = {
//       text,
//       date: serverTimestamp(),
//     };

//     await updateDoc(doc(db, 'userChats', currentUser.uid), {
//       [data.chatId + '.lastMessage']: lastMessage,
//       [data.chatId + '.date']: serverTimestamp(),
//     });

//     setText('');
//     setImg(null);
//   };

//   return (
//     <div className='input'>
//       <div>
//         <input
//           type="text"
//           placeholder='Type something...'
//           onChange={(e) => setText(e.target.value)}
//           value={text}
//         />
//       </div>
//       <div className='send'>
//         <img src={attach} alt='attach' />
//         <input
//           type='file'
//           style={{ display: 'none' }}
//           id='file'
//           onChange={(e) => setImg(e.target.files[0])}
//         />
//         <label htmlFor='file'>
//           <img src={add} alt='add' />
//         </label>
//         <button onClick={handleSend}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Input;


import React, { useContext, useState } from 'react';
import "./input.css";
import add from "../../../images/addimagefour.png";
import attach from "../../../images/attachimageone.png";
import { ChatAuthContext } from '../chatContext/ChatAuthContext';
import { ChatsContext } from '../chatContext/ChatsContext';
import { v4 as uuid } from 'uuid';
import {
  arrayUnion,
  doc,
  updateDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db, storage } from '../../../firebase';
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';

const Input = () => {
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);
  const { currentUser } = useContext(ChatAuthContext);
  const { data } = useContext(ChatsContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on('state_changed', null, (error) => {
        console.error(error);
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          const messageData = {
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: serverTimestamp(),
            img: downloadURL,
          };

          const chatDocRef = doc(db, 'chats', data.chatId);

          // Use updateDoc to add a new message to the "messages" array with serverTimestamp()
          await updateDoc(chatDocRef, {
            messages: arrayUnion(messageData),
          });
        });
      });
    } else {
      const messageData = {
        id: uuid(),
        text,
        senderId: currentUser.uid,
        date: serverTimestamp(),
      };

      const chatDocRef = doc(db, 'chats', data.chatId);

      // Use updateDoc to add a new message to the "messages" array with serverTimestamp()
      await updateDoc(chatDocRef, {
        messages: arrayUnion(messageData),
      });
    }

    const lastMessage = {
      text,
      date: serverTimestamp(),
    };

    // Update userChats document with the lastMessage and date fields
    const userChatsDocRef = doc(db, 'userChats', currentUser.uid);
    await updateDoc(userChatsDocRef, {
      [data.chatId + '.lastMessage']: lastMessage,
      [data.chatId + '.date']: serverTimestamp(),
    });

    setText('');
    setImg(null);
  };

  return (
    <div className='input'>
      <div>
        <input
          type='text'
          placeholder='Type something...'
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <div className='send'>
        <img src={attach} alt='attach' />
        <input
          type='file'
          style={{ display: 'none' }}
          id='file'
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor='file'>
          <img src={add} alt='add' />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;

