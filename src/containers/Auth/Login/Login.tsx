// ------------------------------- NODE MODULES -------------------------------

import React from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import { Input } from '../../../ui/Input/Input';
import { Button } from '../../../ui/Button/Button';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const Login = (): JSX.Element => {
    return (
        <div>
            <Input placeholder="Username"></Input>
            <Input placeholder="Password"></Input>
            <Button>Log In</Button>
        </div>
    );
};
