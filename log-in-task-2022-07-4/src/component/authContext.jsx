import React, { useState } from 'react';

export const AuthContext = React.createContext();

export function AuthProvider (props)  {
    const [auth,setAuth]= useState({
        email:'g@us.com'
    })
    return (
    
            <AuthContext.Provider value={{auth ,setAuth}}>
                {props.children}
            </AuthContext.Provider>
        
    );
}
