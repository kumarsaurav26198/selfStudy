import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { SignedInStack, SignedOutStack } from './AppNavigation';

const AuthNavigation = () => {

    const [currentUser, setCurrentUser] = useState("");

    //   const userHandler = user => user ? setCurrentUser(user) : setCurrentUser(null);

    //   useEffect(() => {
    //     return auth.onAuthStateChanged((user) => userHandler(user));
    //   }, []);

    return (
        <>
            {currentUser ? <SignedInStack /> : <SignedOutStack />}
        </>
    );
};

export default AuthNavigation;