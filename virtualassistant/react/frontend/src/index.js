import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { DialogProvider } from './FComponents/signup/DialogProvider';
import { ChatProvider } from './contextr/ChatsContext';
import { AuthContext, AuthProvider } from './contextr/AuthContext';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <BrowserRouter>
    <DialogProvider>
    <AuthProvider><ChatProvider><PayPalScriptProvider options={{ "client-id": "Ad8zum_hHM2k52objko-llI1AvUKW3AZ_1ukxgoejhmA_IkPC7rkMH-H3OaCQeQrxmYmn2PcFx_xQJV8"}}><App /></PayPalScriptProvider></ChatProvider></AuthProvider>  
    </DialogProvider>
    </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
