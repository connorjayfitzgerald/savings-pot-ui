// ------------------------------- NODE MODULES -------------------------------

import React, { DetailedHTMLProps } from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import './Button.css';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const Button = (
    props: DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
): JSX.Element => {
    return <button className="Button">{props.children}</button>;
};
