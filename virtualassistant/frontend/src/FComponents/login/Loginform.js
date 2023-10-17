import React, { useState } from 'react';
import reset from "../../images/resetpass.png";
import "./Loginform.css";
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const Loginform = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);
  const [resettingPassword, setResettingPassword] = useState(false); // State to track password reset request
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggingIn(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        let errorMessage = error.message;

        if (errorCode === 'auth/invalid-email') {
          errorMessage = "Incorrect email or password. Please try again.";
        }

        if (errorCode === 'auth/missing-email') {
          errorMessage = "Enter your email.";
        }

        if (errorCode === 'auth/missing-password') {
          errorMessage = "Incorrect email or password. Please try again.";
        }

        if (errorCode === 'auth/invalid-login-credentials') {
          errorMessage = "Incorrect email or password. Please try again.";
        }

        if (errorCode === 'auth/network-request-failed') {
          errorMessage = "Check your internet connection";
        }

        setErrorMessage(errorMessage);
        setLoggingIn(false);
      });
  };

  const handleResetPassword = () => {
    if (!email) {
      setErrorMessage("Enter your email.");
    } else {
      // Show "Sending request..." message
      setResettingPassword(true);

      // Send a password reset email to the provided email address
      sendPasswordResetEmail(auth, email)
        .then(() => {
          // Password reset email sent successfully
          setErrorMessage("Password reset email sent. Please check your inbox.");
          setResettingPassword(false);
        })
        .catch((error) => {
        const errorCode = error.code;
        let errorMessage = error.message;

        if (errorCode === 'auth/invalid-email') {
          errorMessage = "Incorrect email or password. Please try again.";
        }

        if (errorCode === 'auth/missing-email') {
          errorMessage = "Enter your email.";
        }

        if (errorCode === 'auth/missing-password') {
          errorMessage = "Invalid email address. Please check and try again.";
        }
          
        if (errorCode === 'auth/network-request-failed') {
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
