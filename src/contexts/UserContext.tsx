/* eslint-disable @typescript-eslint/no-unused-vars */

// ------------------------------- NODE MODULES -------------------------------

import { createContext, SetStateAction } from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

// -------------------------------- VARIABLES ---------------------------------

export interface UserContext {
    authenticated: boolean;
    setAuthenticated: (value: SetStateAction<boolean>) => void;
}

const defaults: UserContext = {
    authenticated: false,
    setAuthenticated: (value: SetStateAction<boolean>) => {},
};

// ----------------------------- FILE DEFINITION ------------------------------

export const UserContext = createContext(defaults);
export const UserContextProvider = UserContext.Provider;
