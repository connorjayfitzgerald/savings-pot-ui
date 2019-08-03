// ------------------------------- NODE MODULES -------------------------------

import React, { FunctionComponent, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

// ------------------------------ CUSTOM MODULES ------------------------------

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const withAutoScroll = (Component: FunctionComponent) =>
    withRouter(
        (props: RouteComponentProps): JSX.Element => {
            const { location } = props;

            useEffect(() => {
                window.scrollTo({ behavior: 'smooth', top: 0, left: 0 });
            }, [location.pathname]);

            return <Component />;
        },
    );
