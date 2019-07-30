// ------------------------------- NODE MODULES -------------------------------

import React, { Fragment, useState } from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import { Navbar, SideDrawer } from '../../components';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

interface LayoutProps {
    children?: JSX.Element;
}

export const Layout = (props: LayoutProps): JSX.Element => {
    const [showDrawer, setShowDrawer] = useState(false);

    const toggleDrawer = () => setShowDrawer(prevState => !prevState);

    return (
        <Fragment>
            <Navbar toggleDrawer={toggleDrawer} />
            <SideDrawer shown={showDrawer} toggle={toggleDrawer} />
            <main>{props.children}</main>
        </Fragment>
    );
};
