import React, { useState,useEffect } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);



export const AuthContextProvider = (props)=>{
    const [authState,setAuthState] = useState({
        user :"",
        token:""
    });

   
    useEffect(()=>{
        const data = localStorage.getItem("auth");
        if(data){
            const parseData = JSON.parse(data);
            setAuthState({
                ...authState,
                user:parseData.data,
                token:parseData.token
            })
        }
    }
    ,[authState]);
   

    return(
        <AuthContext.Provider value={{authState,setAuthState}}>
            {props.children}
        </AuthContext.Provider>
    )
}