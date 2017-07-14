import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../../pages/home/HomePage';
import LoginPage from '../../pages/login/LoginPage';
import CustomersPage from '../../pages/customers/CustomersPage';

// interface IRoutes {
//     currentUser: {};
// }

const RoutesComponent = (props: {currentUser: {}}) => {
    return (
        <div>
            {props.currentUser ? (
                <Switch>
                    <Route exact={true} path="/" component={HomePage as any} />
                    <Route exact={true} path="/customers" component={CustomersPage as any} />
                    <Route exact={true} path="/login" component={LoginPage as any} />
                </Switch>
            ) : (
                <Switch>
                    <Route exact={true} path="/login" component={LoginPage as any} />
                </Switch>
            )}
        </div>
    );
};

export default RoutesComponent;