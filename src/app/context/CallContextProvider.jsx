"use client"
import React, { createContext, useState } from 'react';

export const CallContext=createContext()

const CallContextProvider = ({children}) => {
    const [call,setCall]=useState([]);
    const data={
        call,
        setCall
    }
    return (
        <CallContext.Provider value={data}>
            {children}
        </CallContext.Provider>
    );
};

export default CallContextProvider;