// ------------------------------- NODE MODULES -------------------------------

import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// ------------------------------ CUSTOM MODULES ------------------------------

import { Auth, Incomings, Summary } from './containers';
import { Layout, withAutoScroll } from './hoc';
import { RootContextProvider } from './contexts';
import { Loading } from './components';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

const BaseApp = (): JSX.Element => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const toggleAuth = () => setAuthenticated(prevState => !prevState);
    const toggleSideDrawer = () => setSideDrawerOpen(prevState => !prevState);

    const displayed = authenticated ? (
        <Layout>
            <Switch>
                <Route path="/" exact component={Summary} />
                <Route path="/incomings" exact component={Incomings} />
                <Redirect to="/" />
            </Switch>
        </Layout>
    ) : (
        <Auth toggleAuth={toggleAuth} />
    );

    const appContext = { loading, setLoading, sideDrawerOpen, toggleSideDrawer };
    const userContext = { authenticated, setAuthenticated };

    return (
        <RootContextProvider app={appContext} user={userContext}>
            <Loading show={loading} />
            {displayed}
        </RootContextProvider>
    );
};

export const App = withAutoScroll(BaseApp);
