// import React, { useContext, useState } from 'react'
// import image from "../../../images/vmainpage.jpg"
// import "./Search.css"
// import { collection, query, where, getDoc, setDoc, doc, updateDoc, serverTimestamp, getDocs } from "firebase/firestore"
// import { db } from '../../../firebase'
// import { async } from '@firebase/util'
// import { ChatAuthContext } from '../chatContext/ChatAuthContext'
// import { Dns } from '@mui/icons-material'

// const ChatSearch = () => {

//   const [username, setUsername] = useState("")
//   const [user, setUser] = useState(null)
//   const [err, setErr] = useState(false)

//   const {currentUser} = useContext(ChatAuthContext)

//   const handleSearch = async () => {
//     const q = query(
//       collection(db, "users"),
//       where("displayName", "==", username)
//     )

//     try {
//       const querySnapshot = await getDocs(q);
//       querySnapshot.forEach((doc) => { 
//         setUser(doc.data())
//     })
//     } catch (error) {
//       setErr(true)
//     }
//   }

//   const handleKey = (e) => {
//     e.code === "Enter" && handleSearch()
//   }

//   // handle select method impplementation!

//   const handleSelect = async () => {
//     // check whether the group (chats in firestore) exists, if not create
//     const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid
//     try {
//       const res = await getDoc(doc(db, "chats", combinedId))
//       // Create use chats
//       if (!res.exists()) {
//         // Create a chat in chats collections
//         await setDoc(doc(db, "chats", combinedId), {messages:[]})

//         // Creatuser

//         // userChats: {
//         //   okelloId: {
//         //     combinedId: {
//         //       userInfo{
//         //         dn, img, id
//         //       },
//         //       lastMessage: "",
//         //       date:
//         //     }
//         //   }
//         // }

//         await updateDoc(doc(db, "userChats", currentUser.uid), {
//           [combinedId + ".userInfo"]: {
//             uid: user.uid,
//             displayName: user.displayName,
//             photoURL: user.photoURL
//           },
//           [combinedId+".date"]: serverTimestamp()
//         })

//         await updateDoc(doc(db, "userChats", user.uid), {
//           [combinedId + ".userInfo"]: {
//             uid: currentUser.uid,
//             displayName: currentUser.displayName,
//             photoURL: currentUser.photoURL
//           },
//           [combinedId+".date"]: serverTimestamp()
//         })
//       }
//     }catch(err){}
  
//     setUser(null)
//     setUsername("")
//   }

//   return (
//       <div className='search'>
//           <div className='searchForm'>
//         <input type="text"
//           placeholder='find a user'
//           value={setUsername}
//           onKeyDown={handleKey} onChange={e => setUsername(e.target.value)} />
//             {err && <span>User not found</span>}
//              {user && <div className='userChat' onClick={handleSelect}>
//               <img src={user.photoURL} alt="logo" />
//               <div className='userChatInfo'>
//                 <span>{user.displayName}</span>
//                 </div>
//               </div> }
//           </div>
//       </div>
//   )
// }

// export default ChatSearch



import React, { useContext, useState } from 'react';
import "./Search.css";
import { collection, query, where, getDocs, getDoc, setDoc, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../../../firebase';
import { ChatAuthContext } from '../chatContext/ChatAuthContext';

const ChatSearch = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(ChatAuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((document) => {
        setUser(document.data());
      });
      setErr(false); // Reset the error state if a user is found.
    } catch (error) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSelect = async () => {
    if (user) {
      const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
      try {
        const res = await getDoc(doc(db, "chats", combinedId));
        if (!res.exists()) {
          await setDoc(doc(db, "chats", combinedId), { messages: [] });
          await updateDoc(doc(db, "userChats", currentUser.uid), {
            [combinedId]: {
              userInfo: {
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
              },
              date: serverTimestamp(),
            },
          });
          await updateDoc(doc(db, "userChats", user.uid), {
            [combinedId]: {
              userInfo: {
                uid: currentUser.uid,
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL,
              },
              date: serverTimestamp(),
            },
          });
        }
      } catch (error) {
        console.error(error);
      }
  
      setUser(null);
      setUsername("");
    }
  };

  return (
    <div className='search'>
      <div className='searchForm'>
        <input
          type="text"
          placeholder='find a user'
          value={username}
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        />
        {err && <span>User not found</span>}
        {user && (
          <div className='userChat' onClick={handleSelect}>
            <img src={user.photoURL} alt="logo" />
            <div className='userChatInfo'>
              <span>{user.displayName}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatSearch;
