// import { onAuthStateChanged } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";
// import { auth } from "../../../firebase";

// export const ChatAuthContext = createContext();

// export const ChatAuthContextProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState({});

//     useEffect(() => {
//         const unsub = onAuthStateChanged(auth, (user) => {
//             setCurrentUser(user);
//         });

//         return () => {
//             unsub()
//         }
//     }, []);

//     return (
//         <ChatAuthContext.Provider value={{ currentUser }}>
//             {children}
//         </ChatAuthContext.Provider>
//     );
// };


import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../../firebase";

export const ChatAuthContext = createContext();

export const ChatAuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        return () => {
            unsub();
        }
    }, []);

    return (
        <ChatAuthContext.Provider value={{ currentUser }}>
            {children}
        </ChatAuthContext.Provider>
    );
};
