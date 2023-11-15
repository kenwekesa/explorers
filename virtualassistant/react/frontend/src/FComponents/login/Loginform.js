// // import React, { useState } from 'react';
// // import reset from "../../images/resetpass.png";
// // import "./Loginform.css";
// // import { Link } from 'react-router-dom';
// // import { signInWithEmailAndPassword } from "firebase/auth";
// // import { sendPasswordResetEmail } from "firebase/auth";
// // import { auth } from '../../firebase/firebase';
// // import { useNavigate } from 'react-router-dom';
// // import { findUser } from '../../services/api/DataApi'
// // import { useContext } from 'react';
// // import { AuthContext } from '../../contextr/AuthContext';

// // const Loginform = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [errorMessage, setErrorMessage] = useState('');
// //   const [loggingIn, setLoggingIn] = useState(false);
// //   const [resettingPassword, setResettingPassword] = useState(false); // State to track password reset request
// //   const {dispatch} = useContext(AuthContext)
// //   const navigate = useNavigate();

// //   const handleLogin = (e) => {
// //     e.preventDefault();
// //     setLoggingIn(true);

// //     signInWithEmailAndPassword(auth, email, password)
// //       .then( async(userCredential) => {
// //         // const user = userCredential.user;
// //         // navigate("/dashboard");

// //         // ************** the new code ***************
// //       const user = userCredential.user
// //       const users = await findUser(user.uid)
// //       dispatch({ type: "LOGIN", payload: user })
// //       // navigate("/dashboard");
// //       console.log(users[0].usertype)
// //       users[0]!= undefined && users[0].usertype =='client'?
// //       navigate('/dashboard')
// //       :users[0]!= undefined && users[0].usertype == 'va'?
// //       navigate('/mydashboard')
// //       :navigate('/admin_dashboard')
// //       })
// //       .catch((error) => {
// //         const errorCode = error.code;
// //         let errorMessage = error.message;

// //         if (errorCode === 'auth/invalid-email') {
// //           errorMessage = "Incorrect email or password. Please try again.";
// //         }

// //         if (errorCode === 'auth/missing-email') {
// //           errorMessage = "Enter your email.";
// //         }

// //         if (errorCode === 'auth/missing-password') {
// //           errorMessage = "Incorrect email or password. Please try again.";
// //         }

// //         if (errorCode === 'auth/invalid-login-credentials') {
// //           errorMessage = "Incorrect email or password. Please try again.";
// //         }

// //         if (errorCode === 'auth/network-request-failed') {
// //           errorMessage = "Check your internet connection";
// //         }

// //         setErrorMessage(errorMessage);
// //         setLoggingIn(false);
// //       });
// //   };

// //   const handleResetPassword = () => {
// //     if (!email) {
// //       setErrorMessage("Enter your email.");
// //     } else {
// //       // Show "Sending request..." message
// //       setResettingPassword(true);

// //       // Send a password reset email to the provided email address
// //       sendPasswordResetEmail(auth, email)
// //         .then(() => {
// //           // Password reset email sent successfully
// //           setErrorMessage("Password reset email sent. Please check your inbox.");
// //           setResettingPassword(false);
// //         })
// //         .catch((error) => {
// //         const errorCode = error.code;
// //         let errorMessage = error.message;

// //         if (errorCode === 'auth/invalid-email') {
// //           errorMessage = "Incorrect email or password. Please try again.";
// //         }

// //         if (errorCode === 'auth/missing-email') {
// //           errorMessage = "Enter your email.";
// //         }

// //         if (errorCode === 'auth/missing-password') {
// //           errorMessage = "Invalid email address. Please check and try again.";
// //         }
          
// //         if (errorCode === 'auth/network-request-failed') {
// //           errorMessage = "Check your internet connection";
// //         }

// //         setErrorMessage(errorMessage);
// //           setResettingPassword(false);
// //         });
// //     }
// //   };

// //   return (
// //     <div className='mlogmainf'>
// //       <div className='mloginform'>
// //         <p className='mplog'>Please Login</p>
// //         <hr></hr>
// //         <form>
// //           <input
// //             className='loginputone logtop'
// //             placeholder='Email'
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           /><br></br>
// //           <input
// //             className='loginputone logtopi'
// //             placeholder='Password'
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           /><br></br>
// //           {loggingIn ? (
// //             <p className="logging-in-message">Logging in...</p>
// //           ) : (
// //             errorMessage && <p className="error-message">{errorMessage}</p>
// //           )}
// //           <button onClick={handleLogin} className='ton tin'>
// //             Login
// //           </button>
// //         </form>
// //         <div className='logimgreset login_change_password' onClick={handleResetPassword}>
// //           <img src={reset} alt="reset" loading="lazy" />
// //           {resettingPassword ? (
// //             <p className="resetting-password-message">Sending request...</p>
// //           ) : (
// //             <p>Reset your password</p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Loginform;

// import React, { useState, useEffect } from 'react';
// import reset from "../../images/resetpass.png";
// import "./Loginform.css";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { sendPasswordResetEmail } from "firebase/auth";
// import { auth } from '../../firebase/firebase';
// import { useNavigate } from 'react-router-dom';
// import { findUser } from '../../services/api/DataApi'
// import { useContext } from 'react';
// import { AuthContext } from '../../contextr/AuthContext';

// const Loginform = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [loggingIn, setLoggingIn] = useState(false);
//   const [resettingPassword, setResettingPassword] = useState(false);
//   const { dispatch } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleInactivityLogout = () => {
//       dispatch({ type: "LOGOUT" });
//       navigate('/login');
//     };

//     const timeoutId = setTimeout(handleInactivityLogout, 1 * 60 * 1000); // 30 minutes in milliseconds

//     const resetTimeout = () => {
//       clearTimeout(timeoutId);
//       setTimeout(handleInactivityLogout, 1 * 60 * 1000);
//     };

//     document.addEventListener('mousemove', resetTimeout);
//     document.addEventListener('keydown', resetTimeout);

//     return () => {
//       document.removeEventListener('mousemove', resetTimeout);
//       document.removeEventListener('keydown', resetTimeout);
//       clearTimeout(timeoutId);
//     };
//   }, [dispatch, navigate]);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setLoggingIn(true);

//     signInWithEmailAndPassword(auth, email, password)
//       .then(async (userCredential) => {
//         const user = userCredential.user;
//         const users = await findUser(user.uid)
//         dispatch({ type: "LOGIN", payload: user })
//         console.log(users[0].usertype)
//         users[0] != undefined && users[0].usertype === 'client' ?
//           navigate('/dashboard')
//           : users[0] != undefined && users[0].usertype === 'va' ?
//             navigate('/mydashboard')
//             : navigate('/admin_dashboard')
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         let errorMessage = error.message;

//         if (errorCode === 'auth/invalid-email') {
//           errorMessage = "Incorrect email or password. Please try again.";
//         }

//         if (errorCode === 'auth/missing-email') {
//           errorMessage = "Enter your email.";
//         }

//         if (errorCode === 'auth/missing-password') {
//           errorMessage = "Incorrect email or password. Please try again.";
//         }

//         if (errorCode === 'auth/invalid-login-credentials') {
//           errorMessage = "Incorrect email or password. Please try again.";
//         }

//         if (errorCode === 'auth/network-request-failed') {
//           errorMessage = "Check your internet connection";
//         }

//         setErrorMessage(errorMessage);
//         setLoggingIn(false);
//       });
//   };

//   const handleResetPassword = () => {
//     if (!email) {
//       setErrorMessage("Enter your email.");
//     } else {
//       setResettingPassword(true);

//       sendPasswordResetEmail(auth, email)
//         .then(() => {
//           setErrorMessage("Password reset email sent. Please check your inbox.");
//           setResettingPassword(false);
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           let errorMessage = error.message;

//           if (errorCode === 'auth/invalid-email') {
//             errorMessage = "Incorrect email or password. Please try again.";
//           }

//           if (errorCode === 'auth/missing-email') {
//             errorMessage = "Enter your email.";
//           }

//           if (errorCode === 'auth/missing-password') {
//             errorMessage = "Invalid email address. Please check and try again.";
//           }

//           if (errorCode === 'auth/network-request-failed') {
//             errorMessage = "Check your internet connection";
//           }

//           setErrorMessage(errorMessage);
//           setResettingPassword(false);
//         });
//     }
//   };

//   return (
//     <div className='mlogmainf'>
//       <div className='mloginform'>
//         <p className='mplog'>Please Login</p>
//         <hr></hr>
//         <form>
//           <input
//             className='loginputone logtop'
//             placeholder='Email'
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           /><br></br>
//           <input
//             className='loginputone logtopi'
//             placeholder='Password'
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           /><br></br>
//           {loggingIn ? (
//             <p className="logging-in-message">Logging in...</p>
//           ) : (
//             errorMessage && <p className="error-message">{errorMessage}</p>
//           )}
//           <button onClick={handleLogin} className='ton tin'>
//             Login
//           </button>
//         </form>
//         <div className='logimgreset login_change_password' onClick={handleResetPassword}>
//           <img src={reset} alt="reset" loading="lazy" />
//           {resettingPassword ? (
//             <p className="resetting-password-message">Sending request...</p>
//           ) : (
//             <p>Reset your password</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Loginform;

// import React, { useState, useEffect } from 'react';
// import reset from "../../images/resetpass.png";
// import "./Loginform.css";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { sendPasswordResetEmail } from "firebase/auth";
// import { auth } from '../../firebase/firebase';
// import { useNavigate } from 'react-router-dom';
// import { findUser } from '../../services/api/DataApi'
// import { useContext } from 'react';
// import { AuthContext } from '../../contextr/AuthContext';

// const Loginform = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [loggingIn, setLoggingIn] = useState(false);
//   const [resettingPassword, setResettingPassword] = useState(false);
//   const [showTimeoutDialog, setShowTimeoutDialog] = useState(false); // State to control the timeout dialog
//   const [authenticated, setAuthenticated] = useState(false); // Track user authentication
//   const { dispatch } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     let timeoutId;

//     const handleInactivityLogout = () => {
//       if (authenticated) {
//         dispatch({ type: "LOGOUT" });
//         setShowTimeoutDialog(true);
//         setTimeout(() => {
//           setShowTimeoutDialog(false);
//           navigate('/login');
//         }, 3000); // Show the dialog for 3 seconds
//       }
//     };

//     const resetTimeout = () => {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(handleInactivityLogout, 1 * 60 * 1000); // 3 minutes in milliseconds
//     };

//     document.addEventListener('mousemove', resetTimeout);
//     document.addEventListener('keydown', resetTimeout);

//     resetTimeout(); // Initial call to start the timeout

//     return () => {
//       document.removeEventListener('mousemove', resetTimeout);
//       document.removeEventListener('keydown', resetTimeout);
//       clearTimeout(timeoutId);
//     };
//   }, [dispatch, navigate, authenticated]);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setLoggingIn(true);

//     signInWithEmailAndPassword(auth, email, password)
//       .then(async (userCredential) => {
//         const user = userCredential.user;
//         const users = await findUser(user.uid)
//         dispatch({ type: "LOGIN", payload: user })
//         setAuthenticated(true); // Set authentication state to true
//         console.log(users[0].usertype)
//         users[0] != undefined && users[0].usertype === 'client' ?
//           navigate('/dashboard')
//           : users[0] != undefined && users[0].usertype === 'va' ?
//             navigate('/mydashboard')
//             : navigate('/admin_dashboard')
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         let errorMessage = error.message;

//         if (errorCode === 'auth/invalid-email') {
//           errorMessage = "Incorrect email or password. Please try again.";
//         }

//         if (errorCode === 'auth/missing-email') {
//           errorMessage = "Enter your email.";
//         }

//         if (errorCode === 'auth/missing-password') {
//           errorMessage = "Incorrect email or password. Please try again.";
//         }

//         if (errorCode === 'auth/invalid-login-credentials') {
//           errorMessage = "Incorrect email or password. Please try again.";
//         }

//         if (errorCode === 'auth/network-request-failed') {
//           errorMessage = "Check your internet connection";
//         }

//         setErrorMessage(errorMessage);
//         setLoggingIn(false);
//       });
//   };

//   const handleResetPassword = () => {
//     if (!email) {
//       setErrorMessage("Enter your email.");
//     } else {
//       setResettingPassword(true);

//       sendPasswordResetEmail(auth, email)
//         .then(() => {
//           setErrorMessage("Password reset email sent. Please check your inbox.");
//           setResettingPassword(false);
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           let errorMessage = error.message;

//           if (errorCode === 'auth/invalid-email') {
//             errorMessage = "Incorrect email or password. Please try again.";
//           }

//           if (errorCode === 'auth/missing-email') {
//             errorMessage = "Enter your email.";
//           }

//           if (errorCode === 'auth/missing-password') {
//             errorMessage = "Invalid email address. Please check and try again.";
//           }

//           if (errorCode === 'auth/network-request-failed') {
//             errorMessage = "Check your internet connection";
//           }

//           setErrorMessage(errorMessage);
//           setResettingPassword(false);
//         });
//     }
//   };

//   return (
//     <div className='mlogmainf'>
//       <div className='mloginform'>
//         <p className='mplog'>Please Login</p>
//         <hr></hr>
//         {showTimeoutDialog && (
//           <div className="timeout-dialog">
//             <p>Your session has expired due to inactivity. Please log in again.</p>
//           </div>
//         )}
//         <form>
//           <input
//             className='loginputone logtop'
//             placeholder='Email'
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           /><br></br>
//           <input
//             className='loginputone logtopi'
//             placeholder='Password'
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           /><br></br>
//           {loggingIn ? (
//             <p className="logging-in-message">Logging in...</p>
//           ) : (
//             errorMessage && <p className="error-message">{errorMessage}</p>
//           )}
//           <button onClick={handleLogin} className='ton tin'>
//             Login
//           </button>
//         </form>
//         <div className='logimgreset login_change_password' onClick={handleResetPassword}>
//           <img src={reset} alt="reset" loading="lazy" />
//           {resettingPassword ? (
//             <p className="resetting-password-message">Sending request...</p>
//           ) : (
//             <p>Reset your password</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Loginform;

// import React, { useState, useEffect } from 'react';
// import reset from "../../images/resetpass.png";
// import "./Loginform.css";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { sendPasswordResetEmail } from "firebase/auth";
// import { auth } from '../../firebase/firebase';
// import { useNavigate } from 'react-router-dom';
// import { findUser } from '../../services/api/DataApi'
// import { useContext } from 'react';
// import { AuthContext } from '../../contextr/AuthContext';

// const Loginform = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [loggingIn, setLoggingIn] = useState(false);
//   const [resettingPassword, setResettingPassword] = useState(false);
//   const [showTimeoutDialog, setShowTimeoutDialog] = useState(false); // State to control the timeout dialog
//   const { dispatch } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     let timeoutId;

//     const handleInactivityLogout = () => {
//       setShowTimeoutDialog(true);
//       setTimeout(() => {
//         dispatch({ type: "LOGOUT" });
//         setShowTimeoutDialog(false);
//         navigate('/login');
//       }, 3000); // Show the dialog for 3 seconds
//     };

//     const resetTimeout = () => {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(handleInactivityLogout, 1 * 60 * 1000); // 1 minute in milliseconds
//     };

//     document.addEventListener('mousemove', resetTimeout);
//     document.addEventListener('keydown', resetTimeout);

//     resetTimeout(); // Initial call to start the timeout

//     return () => {
//       document.removeEventListener('mousemove', resetTimeout);
//       document.removeEventListener('keydown', resetTimeout);
//       clearTimeout(timeoutId);
//     };
//   }, [dispatch, navigate]);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoggingIn(true);

//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       const users = await findUser(user.uid);

//       dispatch({ type: "LOGIN", payload: user });
//       console.log(users[0].usertype);

//       if (users[0] != undefined) {
//         if (users[0].usertype === 'client') {
//           navigate('/dashboard');
//         } else if (users[0].usertype === 'va') {
//           navigate('/mydashboard');
//         } else {
//           navigate('/admin_dashboard');
//         }
//       }
//     } catch (error) {
//       const errorCode = error.code;
//       let errorMessage = error.message;

//       if (errorCode === 'auth/invalid-email') {
//         errorMessage = "Incorrect email or password. Please try again.";
//       } else if (errorCode === 'auth/missing-email') {
//         errorMessage = "Enter your email.";
//       } else if (errorCode === 'auth/missing-password') {
//         errorMessage = "Incorrect email or password. Please try again.";
//       } else if (errorCode === 'auth/invalid-login-credentials') {
//         errorMessage = "Incorrect email or password. Please try again.";
//       } else if (errorCode === 'auth/network-request-failed') {
//         errorMessage = "Check your internet connection";
//       }

//       setErrorMessage(errorMessage);
//       setLoggingIn(false);
//     }
//   };

//   const handleResetPassword = () => {
//     if (!email) {
//       setErrorMessage("Enter your email.");
//     } else {
//       setResettingPassword(true);

//       sendPasswordResetEmail(auth, email)
//         .then(() => {
//           setErrorMessage("Password reset email sent. Please check your inbox.");
//           setResettingPassword(false);
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           let errorMessage = error.message;

//           if (errorCode === 'auth/invalid-email') {
//             errorMessage = "Incorrect email or password. Please try again.";
//           } else if (errorCode === 'auth/missing-email') {
//             errorMessage = "Enter your email.";
//           } else if (errorCode === 'auth/missing-password') {
//             errorMessage = "Invalid email address. Please check and try again.";
//           } else if (errorCode === 'auth/network-request-failed') {
//             errorMessage = "Check your internet connection";
//           }

//           setErrorMessage(errorMessage);
//           setResettingPassword(false);
//         });
//     }
//   };

//   return (
//     <div className='mlogmainf'>
//       <div className='mloginform'>
//         <p className='mplog'>Please Login</p>
//         <hr></hr>
//         {showTimeoutDialog && (
//           <div className="timeout-dialog">
//             <p>Your session has expired due to inactivity. Please log in again.</p>
//           </div>
//         )}
//         <form>
//           <input
//             className='loginputone logtop'
//             placeholder='Email'
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           /><br></br>
//           <input
//             className='loginputone logtopi'
//             placeholder='Password'
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           /><br></br>
//           {loggingIn ? (
//             <p className="logging-in-message">Logging in...</p>
//           ) : (
//             errorMessage && <p className="error-message">{errorMessage}</p>
//           )}
//           <button onClick={handleLogin} className='ton tin'>
//             Login
//           </button>
//         </form>
//         <div className='logimgreset login_change_password' onClick={handleResetPassword}>
//           <img src={reset} alt="reset" loading="lazy" />
//           {resettingPassword ? (
//             <p className="resetting-password-message">Sending request...</p>
//           ) : (
//             <p>Reset your password</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Loginform;

import React, { useState, useEffect } from 'react';
import reset from "../../images/resetpass.png";
import "./Loginform.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { findUser } from '../../services/api/DataApi'
import { useContext } from 'react';
import { AuthContext } from '../../contextr/AuthContext';

const Loginform = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);
  const [resettingPassword, setResettingPassword] = useState(false);
  const [showTimeoutDialog, setShowTimeoutDialog] = useState(false); // State to control the timeout dialog
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  let timeoutId; // Declare timeoutId outside the useEffect

  useEffect(() => {
    const handleInactivityLogout = () => {
      setShowTimeoutDialog(true);
      setTimeout(() => {
        dispatch({ type: "LOGOUT" });
        setShowTimeoutDialog(false);
        navigate('/login');
      }, 3000); // Show the dialog for 3 seconds
    };

    timeoutId = setTimeout(handleInactivityLogout, 1 * 60 * 1000); // 1 minute in milliseconds

    const resetTimeout = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleInactivityLogout, 1 * 60 * 1000); // 1 minute in milliseconds
    };

    document.addEventListener('mousemove', resetTimeout);
    document.addEventListener('keydown', resetTimeout);

    return () => {
      document.removeEventListener('mousemove', resetTimeout);
      document.removeEventListener('keydown', resetTimeout);
      clearTimeout(timeoutId);
    };
  }, [dispatch, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoggingIn(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const users = await findUser(user.uid);

      dispatch({ type: "LOGIN", payload: user });
      console.log(users[0].usertype);

      if (users[0] != undefined) {
        if (users[0].usertype === 'client') {
          navigate('/dashboard');
        } else if (users[0].usertype === 'va') {
          navigate('/mydashboard');
        } else {
          navigate('/admin_dashboard');
        }
      }
    } catch (error) {
      const errorCode = error.code;
      let errorMessage = error.message;

      if (errorCode === 'auth/invalid-email') {
        errorMessage = "Incorrect email or password. Please try again.";
      } else if (errorCode === 'auth/missing-email') {
        errorMessage = "Enter your email.";
      } else if (errorCode === 'auth/missing-password') {
        errorMessage = "Incorrect email or password. Please try again.";
      } else if (errorCode === 'auth/invalid-login-credentials') {
        errorMessage = "Incorrect email or password. Please try again.";
      } else if (errorCode === 'auth/network-request-failed') {
        errorMessage = "Check your internet connection";
      }

      setErrorMessage(errorMessage);
      setLoggingIn(false);
    }
  };

  const handleResetPassword = () => {
    if (!email) {
      setErrorMessage("Enter your email.");
    } else {
      setResettingPassword(true);

      sendPasswordResetEmail(auth, email)
        .then(() => {
          setErrorMessage("Password reset email sent. Please check your inbox.");
          setResettingPassword(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          let errorMessage = error.message;

          if (errorCode === 'auth/invalid-email') {
            errorMessage = "Incorrect email or password. Please try again.";
          } else if (errorCode === 'auth/missing-email') {
            errorMessage = "Enter your email.";
          } else if (errorCode === 'auth/missing-password') {
            errorMessage = "Invalid email address. Please check and try again.";
          } else if (errorCode === 'auth/network-request-failed') {
            errorMessage = "Check your internet connection";
          }

          setErrorMessage(errorMessage);
          setResettingPassword(false);
        });
    }
  };

  return (
    <div className='mlogmainf'>
      <div className='mloginform'>
        <p className='mplog'>Please Login</p>
        <hr></hr>
        {showTimeoutDialog && (
          <div className="timeout-dialog">
            <p>Your session has expired due to inactivity. Please log in again.</p>
          </div>
        )}
        <form>
          <input
            className='loginputone logtop'
            placeholder='Email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br></br>
          <input
            className='loginputone logtopi'
            placeholder='Password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br></br>
          {loggingIn ? (
            <p className="logging-in-message">Logging in...</p>
          ) : (
            errorMessage && <p className="error-message">{errorMessage}</p>
          )}
          <button onClick={handleLogin} className='ton tin'>
            Login
          </button>
        </form>
        <div className='logimgreset login_change_password' onClick={handleResetPassword}>
          <img src={reset} alt="reset" loading="lazy" />
          {resettingPassword ? (
            <p className="resetting-password-message">Sending request...</p>
          ) : (
            <p>Reset your password</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Loginform;


