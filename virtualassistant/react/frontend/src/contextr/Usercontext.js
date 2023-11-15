// AuthContext.js

import React, { createContext, useEffect, useReducer } from 'react';
import { reducer } from './Userreducer';


export const Usercontext = createContext();

const initialState = {
  isAuthenticated: false,
  user: JSON.parse(localStorage.getItem("user")) || null,
};


  

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>
  {
     localStorage.setItem("user", JSON.stringify(state.user))
  },
  [state.user]
  )
  return (
    <Usercontext.Provider value={{ state, dispatch }}>
      {children}
    </Usercontext.Provider>
  );
};