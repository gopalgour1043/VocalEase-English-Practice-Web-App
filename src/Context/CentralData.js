import React, { createContext, useState, useContext } from 'react';

// Create the Context
const CentralDataContext = createContext();

// Create a provider component
export const CentralDataProvider = ({ children }) => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const[topic,settopic]=useState("");
    const [videocount,setvideocount]=useState(0);
    const [loading,setloading]=useState(false);

    return (
        <CentralDataContext.Provider value={{
            isSignUp, setIsSignUp,
            email, setEmail,
            password, setPassword,
            firstName, setFirstName,
            lastName, setLastName,
            error, setError,
            isLoggedIn, setIsLoggedIn,
            topic,settopic,
            videocount,setvideocount,
            loading, setloading
        }}>
            {children}
        </CentralDataContext.Provider>
    );
};

// Custom hook to access the context values
export const useCentralData = () => {
    return useContext(CentralDataContext);
};
