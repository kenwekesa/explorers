import React, { useState, useEffect } from 'react';
import reset from "../../images/resetpass.png";
import "./Loginform.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { findUser } from '../../services/api/DataApi';
import { useContext } from 'react';
import { AuthContext } from '../../contextr/AuthContext';

const Loginform = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);
  const [resettingPassword, setResettingPassword] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [logoutTimeout, setLogoutTimeout] = useState();
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoggingOut(true);
    }, 1 * 60 * 1000);

    setLogoutTimeout(timeout);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (loggingOut) {
      const confirmLogout = window.confirm("Your session is about to expire. Do you want to log out now or continue using the site?");

      if (confirmLogout) {
        handleLogout();
      } else {
        // Reset logout timer
        setLoggingOut(false);
        // Restart the 20-minute timer
        clearTimeout(logoutTimeout);
        setLogoutTimeout(setTimeout(() => {
          setLoggingOut(true);
        }, 1 * 60 * 1000));
      }
    }
  }, [loggingOut, logoutTimeout]);

  const handleLogout = () => {
    // Log user out
    // Clear the logout timer
    clearTimeout(logoutTimeout);
    dispatch({ type: "LOGOUT" });
    navigate('/login');
  };

  const resetTimeout = () => {
    clearTimeout(logoutTimeout);
    setLogoutTimeout(setTimeout(() => {
      setLoggingOut(true);
    }, 1 * 60 * 1000));
  };

  const handleActivity = () => {
    resetTimeout();
  };

  useEffect(() => {
    document.body.addEventListener('mousemove', handleActivity);
    document.body.addEventListener('keydown', handleActivity);

    return () => {
      document.body.removeEventListener('mousemove', handleActivity);
      document.body.removeEventListener('keydown', handleActivity);
    };
  }, [resetTimeout]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoggingIn(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const users = await findUser(user.uid);

      dispatch({ type: "LOGIN", payload: user });
      console.log(users[0].usertype);

      if (users[0] !== undefined) {
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
            errorMessage = "Check your internet connection.";
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
