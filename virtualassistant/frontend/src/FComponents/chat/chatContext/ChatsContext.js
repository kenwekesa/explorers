// import { onAuthStateChanged } from "firebase/auth";
// import { createContext, useContext, useEffect, useReducer, useState } from "react";
// import { auth } from "../../../firebase";
// import { ChatAuthContext } from "./ChatAuthContext";

// export const ChatsContext = createContext();

// export const ChatsAuthContextProvider = ({ children }) => {

//     const {currentUser} = useContext(ChatAuthContext)
//     const INITIAL_STATE = {
//         chatId: "null",
//         user:{}
//     }

//     const chatReducer = (state, action) => {
//         switch (action.type) {
//             case "CHANGE_USER":
//                 return {
//                     user: action.payload,
//                     chatId: currentUser.uid > action.payloaduid ?
//                         currentUser.uid + action.payloaduid : action.payload.uid + currentUser.uid
//               }
            
//             default:
//                 return state
//         } 
//     }

//     const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE)

//     return (
//         <ChatsContext.Provider value={{ data:state, dispatch }}>
//             {children}
//         </ChatsContext.Provider>
//     );
// };

import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../../../firebase";
import { ChatAuthContext } from "./ChatAuthContext";

export const ChatsContext = createContext();

export const ChatsAuthContextProvider = ({ children }) => {
    const { currentUser } = useContext(ChatAuthContext);
    const INITIAL_STATE = {
        chatId: "null",
        user: {}
    };

    const chatReducer = (state, action) => {
        switch (action.type) {
            case "CHANGE_USER":
                return {
                    user: action.payload,
                    chatId: currentUser.uid > action.payload.uid
                        ? currentUser.uid + action.payload.uid
                        : action.payload.uid + currentUser.uid
                };

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

    return (
        <ChatsContext.Provider value={{ data: state, dispatch }}>
            {children}
        </ChatsContext.Provider>
    );
};

