import React, { useState } from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
    const [auth,setAuth]= useState({
        email:'ameng@us.com'
    })
    return (
        <>
            <AuthContext.Provider value={{auth , setAuth}}>
                {props.children}
            </AuthContext.Provider>

        </>
    );
}
