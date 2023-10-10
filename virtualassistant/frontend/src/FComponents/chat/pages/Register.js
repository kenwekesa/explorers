// import React, { useState } from 'react'
// import "./Register.css"
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import add from "../../../images/addimagetwo.png"
// import { db, auth, storage } from "../../../firebase"
// import { async } from '@firebase/util';
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, setDoc } from "firebase/firestore"; 

// const Register = () => {
// const [err, setError] = useState(false)
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const displayName = e.target[0].value
//     const email = e.target[1].value
//     const password = e.target[2].value
//     const file = e.target[3].files[0]

//     try {

//       const res = createUserWithEmailAndPassword(auth, email, password)
        
//       const storageRef = ref(storage, displayName);

//       const uploadTask = uploadBytesResumable(storageRef, file);
//       uploadTask.on('state_changed', 
//         (error) => {
//           setError(true)
//         }, 
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
//             await updateProfile((await res).user, {
//               displayName,
//               photoURL: downloadURL,
//             })
//             await setDoc(doc(db, "users", (await res).user.uid), {
//               uid: (await res).user.uid,
//               displayName,
//               email,
//               photoURL:downloadURL,
//             })
//           });
//         }
//       );
//     } catch (err) {
//       setError(true)
//     }
//   }

//   return (
//     <div className='formContainer'>
//         <div className='formWrapper'>
//           <p>Let's chat now!</p> 
//           <p>Register Now!</p>    
//           <form onSubmit={handleSubmit}>
//             <input type="text" placeholder='Enter your name!'/>  
//             <input type="email" placeholder='email!'/> 
//             <input type="password" placeholder='password!'/>
//             <input className='fileone' type="file" id='file' />
//             <label htmlFor='file'>
//                <img src={add} alt="logo"/> add your profile image
//             </label>      
//             <button>Sign Up</button>  
//           {err && <span>Something went terrible wrong</span>}
//             </form> 
//             <a>You do have an account? Login now!</a>    
//        </div>   
//     </div>
//   )
// }

// export default Register


import React, { useState } from 'react';
import './Register.css';
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { db, auth, storage, database } from '../../../firebase'; // Assuming you have a reference to Firebase Realtime Database as 'database'.
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore'; // Add this import for setDoc

const Register = () => {
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // Create a new user in Firebase Authentication
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Set up a reference to the storage location
      const storageRef = ref(storage, `user-profiles/${res.user.uid}`);

      // Upload the file to storage
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Monitor the upload progress
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle progress (optional)
        },
        (error) => {
          // Handle errors during upload
          setError('Error uploading profile image.');
        },
        async () => {
          // Upload completed, get the download URL
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

            // Update user profile with display name and photoURL
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            // Create a user document in Firebase Firestore
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            // Create a user record in Firebase Realtime Database
            // await database.ref(`users/${res.user.uid}`).set({
            //   uid: res.user.uid,
            //   displayName,
            //   email,
            //   photoURL: downloadURL,
            // });
          } catch (error) {
            setError(
              'Error updating user profile or Firestore document or Realtime Database.'
            );
          }
        }
      );
    } catch (err) {
      setError('Error creating user.');
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <p>Let's chat now!</p>
        <p>Register Now!</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input className="fileone" type="file" id="file" />
          <label htmlFor="file">
            <img src={add} alt="logo" /> Add your profile image
          </label>
          <button>Sign Up</button>
          {error && <span>{error}</span>}
        </form>
        <a>You already have an account? Login now!</a>
      </div>
    </div>
  );
};

export default Register;



// import React, { useState } from 'react';
// import "./Register.css";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { db, auth, storage } from "../../../firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, setDoc } from "firebase/firestore";

// const Register = () => {
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const displayName = e.target[0].value;
//     const email = e.target[1].value;
//     const password = e.target[2].value;
//     const file = e.target[3].files[0];

//     try {
//       const res = await createUserWithEmailAndPassword(auth, email, password);
//       const storageRef = ref(storage, displayName);

//       const uploadTask = uploadBytesResumable(storageRef, file);

//       uploadTask.on('state_changed', 
//         null, // Progress function (you can add one if needed)
//         null, // Error function (you can add one if needed)
//         async () => {
//           try {
//             const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

//             await updateProfile(res.user, {
//               displayName,
//               photoURL: downloadURL,
//             });

//             await setDoc(doc(db, "users", res.user.uid), {
//               uid: res.user.uid,
//               displayName,
//               email,
//               photoURL: downloadURL,
//             });
//           } catch (error) {
//             setError("Error uploading profile image or updating user data.");
//           }
//         }
//       );
//     } catch (err) {
//       setError("Error creating user.");
//     }
//   };

//   return (
//     <div className='formContainer'>
//       <div className='formWrapper'>
//         <p>Let's chat now!</p> 
//         <p>Register Now!</p>    
//         <form onSubmit={handleSubmit}>
//            <input type="text" placeholder='Enter your name!'/>  
//            <input type="email" placeholder='email!'/> 
//             <input type="password" placeholder='password!'/>
//             <input className='fileone' type="file" id='file' />
//            <label htmlFor='file'>
//               <img src={add} alt="logo"/> add your profile image
//             </label>  
//           <button>Sign Up</button>  
//           {error && <span>{error}</span>}
//         </form> 
//         <a>You already have an account? Login now!</a>    
//       </div>   
//     </div>
//   );
// };

// export default Register;
