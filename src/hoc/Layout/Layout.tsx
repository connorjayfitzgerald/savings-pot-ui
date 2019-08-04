// ------------------------------- NODE MODULES -------------------------------

import React from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import { Navbar, SideDrawer } from '../../components';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

interface LayoutProps {
    children?: JSX.Element;
}

export const Layout = (props: LayoutProps): JSX.Element => {
    return (
        <>
            <Navbar />
            <SideDrawer />
            <main>{props.children}</main>
        </>
    );
};
