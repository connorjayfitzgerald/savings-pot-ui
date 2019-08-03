// ------------------------------- NODE MODULES -------------------------------

import React from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import { AppContext, AppContextProvider } from './AppContext';
import { UserContext, UserContextProvider } from './UserContext';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

interface RootContextProviderProps {
    app: AppContext;
    user: UserContext;
    children: JSX.Element[];
}

export const RootContextProvider = (props: RootContextProviderProps) => (
    <AppContextProvider value={props.app}>
        <UserContextProvider value={props.user}>{props.children}</UserContextProvider>
    </AppContextProvider>
);

export { AppContext, UserContext };
