import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { DialogProvider } from './FComponents/signup/DialogProvider';
import { ChatProvider } from './contextr/ChatsContext';
import { AuthContext, AuthProvider } from './contextr/AuthContext';

// import "../node_modules/react-bootstrap/dist/react-bootstrap"
// import "../node_modules/bootstrap/dist/css/bootstrap.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <BrowserRouter>
    <DialogProvider>
    <AuthProvider><ChatProvider> <App /></ChatProvider></AuthProvider>  
    </DialogProvider>
    </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
