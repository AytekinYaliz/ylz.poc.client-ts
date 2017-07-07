import * as React from 'react';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './components/app/App';

const history = createBrowserHistory();

const RoutesComponent = (props: {}) => {
    return (
        <Router history={history}>
            <App />
        </Router>
    );
};

export default RoutesComponent;
