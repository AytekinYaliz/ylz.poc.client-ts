import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from '../../pages/home/HomePage';
import LoginPage from '../../pages/login/LoginPage';
import CustomersPage from '../../pages/customers/CustomersPage';


type TRoutesComponent = {
    currentUser: {};
};

const RoutesComponent = (props: TRoutesComponent) => (
    <Switch>
        <PrivateRoute exact={true} path="/" component={HomePage} user={props.currentUser} />
        <PrivateRoute exact={true} path="/customers" component={CustomersPage} user={props.currentUser} />
        <Route exact={true} path="/login" component={LoginPage as any} />
    </Switch>
);

type TPrivateRoute = {
    component: any; //React.Component|React.StatelessComponent;
    user: {};
    path: string;
    exact: boolean;
};
const PrivateRoute = ({component, user, path, exact}: TPrivateRoute) => (
    <Route exact={exact} path={path} component={component} render={props => ( !user && <Redirect to="/login" /> )} />
);

export default RoutesComponent;


// {props.currentUser ? (
//     <Switch>
//         <Route exact={true} path="/" component={HomePage as any} />
//         <Route exact={true} path="/customers" component={CustomersPage as any} />
//         <Route exact={true} path="/login" component={LoginPage as any} />
//     </Switch>
// ) : (
//     <Switch>
//         <Route exact={true} path="/login" component={LoginPage as any} />
//     </Switch>
// )}