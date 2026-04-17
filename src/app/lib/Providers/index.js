"use client"
import CallContextProvider from '@/app/context/CallContextProvider';
import React from 'react';

const Providers = ({children}) => {
    return (
        <CallContextProvider>
            {children}
        </CallContextProvider>
    );
};

export default Providers;