// ------------------------------- NODE MODULES -------------------------------

import React, { Fragment } from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import { Navbar, SideDrawer } from '../../components';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

interface LayoutProps {
    children?: JSX.Element;
}

export const Layout = (props: LayoutProps): JSX.Element => {
    return (
        <Fragment>
            <Navbar />
            <SideDrawer />
            <main>{props.children}</main>
        </Fragment>
    );
};
