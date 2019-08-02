// ------------------------------- NODE MODULES -------------------------------

import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// ------------------------------ CUSTOM MODULES ------------------------------

import { Auth, Incomings, Summary } from './containers';
import { Layout } from './hoc';
import { AppContextProvider } from './contexts';
import { Loading } from './components';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const App: React.FC = (): JSX.Element => {
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

    return (
        <AppContextProvider value={{ loading, setLoading, sideDrawerOpen, toggleSideDrawer }}>
            <Loading show={loading} />
            {displayed}
        </AppContextProvider>
    );
};
