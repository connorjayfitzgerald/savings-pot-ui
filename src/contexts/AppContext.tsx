/* eslint-disable @typescript-eslint/no-unused-vars */

// ------------------------------- NODE MODULES -------------------------------

import { createContext, SetStateAction } from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

// -------------------------------- VARIABLES ---------------------------------

const defaults = {
    loading: false,
    setLoading: (value: SetStateAction<boolean>) => {},
    sideDrawerOpen: false,
    toggleSideDrawer: () => {},
};

// ----------------------------- FILE DEFINITION ------------------------------

export const AppContext = createContext(defaults);
export const AppContextProvider = AppContext.Provider;
