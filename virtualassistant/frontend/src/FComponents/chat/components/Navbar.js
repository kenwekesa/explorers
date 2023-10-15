// import React, { useContext } from 'react'
// import add from "../../../images/vmainpage.jpg"
// import "./Navbar.css"
// import { auth } from '../../../firebase'
// import { ChatAuthContext } from '../chatContext/ChatAuthContext'

// const Navbar = () => {

//   const {currentUser} = useContext(ChatAuthContext)

//   const handleLogout = () => {
//     auth.signOut()
//       .then(() => {
//         // Logout was successful, you can redirect or perform other actions here.
//       })
//       .catch(error => {
//         console.error('Error logging out:', error);
//       });
//   }

//   return (
//     <div className='navbar'>
//      <pan className="logo">Let's chat</pan> 
//      <div className='user'>
//         <img src={currentUser.photoURL} alt="" />  
//         <span>{ currentUser.displayName }</span>
//         <button onClick={handleLogout}>logout</button>      
//       </div>    
//     </div>
//   )
// }

// export default Navbar

import React, { useContext } from 'react';
import add from "../../../images/vmainpage.jpg";
import "./Navbar.css";
import { auth } from '../../../firebase';
import { ChatAuthContext } from '../chatContext/ChatAuthContext';

const Navbar = () => {
  const { currentUser } = useContext(ChatAuthContext);

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        // Logout was successful, you can redirect or perform other actions here.
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  }

  return (
    <div className='navbar'>
      <span className="logo">Let's chat</span>
      <div className='user'>
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
}

export default Navbar;
