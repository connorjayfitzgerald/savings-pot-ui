// ------------------------------- NODE MODULES -------------------------------

import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// ------------------------------ CUSTOM MODULES ------------------------------

import { Auth } from './containers/Auth/Auth';
import { Layout } from './hoc/Layout/Layout';
import { Summary } from './containers/Summary/Summary';
import { Incomings } from './containers/Incomings/Incomings';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const App: React.FC = (): JSX.Element => {
    const [authenticated, setAuthenticated] = useState(false);

    const toggleAuth = () => setAuthenticated(prevState => !prevState);

    return authenticated ? (
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
};
