// ------------------------------- NODE MODULES -------------------------------

import React from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import './App.css';
import { Auth } from './containers/Auth/Auth';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const App: React.FC = (): JSX.Element => {
    const authenticated = false;

    return authenticated ? (
        <div>
            <p>Im in</p>
        </div>
    ) : (
        <Auth />
    );
};
