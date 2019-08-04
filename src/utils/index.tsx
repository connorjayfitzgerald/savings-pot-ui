// ------------------------------- NODE MODULES -------------------------------

import { KeyboardEvent } from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const formatDate = (date: Date) => {
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
};

export const isEnterPressed = (event: KeyboardEvent<HTMLDivElement>) => event.key === 'Enter';
