// ------------------------------- NODE MODULES -------------------------------

import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// ------------------------------ CUSTOM MODULES ------------------------------

import './App.css';
import { Auth } from './containers/Auth/Auth';
import { Layout } from './hoc/Layout/Layout';
import { Summary } from './containers/Summary/Summary';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const App: React.FC = (): JSX.Element => {
    const [authenticated, setAuthenticated] = useState(false);

    const toggleAuth = () => setAuthenticated(prevState => !prevState);

    return authenticated ? (
        <Layout>
            <Switch>
                <Route path="/" exact component={Summary} />
                <Redirect to="/" />
            </Switch>
        </Layout>
    ) : (
        <Auth toggleAuth={toggleAuth} />
    );
};
