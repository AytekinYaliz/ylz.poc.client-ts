import * as React from 'react';
import { RouteProps } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';

import { ICurrentUserState } from '../../types/IGlobalState';
import NoDiv from '../noDiv/NoDiv';
import HeaderComponent from '../header/HeaderComponent';
import FooterComponent from '../footer/FooterComponent';
import LoginPage from '../../pages/login/LoginPage';
import LogoutPage from '../../pages/logout/LogoutPage';
import HomePage from '../../pages/home/HomePage';
import CustomersListPage from '../../pages/customers/list/ListPage';


type IRoutesComponent = {
    currentUser: ICurrentUserState;
};

const RoutesComponent = (props: IRoutesComponent) => (
    <Switch>
        <PrivateRoute exact={true} path="/" component={HomePage as any} user={props.currentUser} />
        <PrivateRoute exact={true} path="/customers" component={CustomersListPage as any} user={props.currentUser} />
        <Route exact={true} path="/login" component={LoginPage as any} />
        <Route exact={true} path="/logout" component={LogoutPage as any} />
    </Switch>
);

interface IPrivateRoute extends RouteProps {
    user: ICurrentUserState;
}
const PrivateRoute: React.StatelessComponent<IPrivateRoute> = (props: IPrivateRoute) => (
    <NoDiv>
        {props.user ? (
            <div className="container">
                <HeaderComponent />
                {PrivateRender(props.component)}
                <FooterComponent />
            </div>
        ) : (
            <Redirect to="/login" />
        )}
    </NoDiv>
);

const PrivateRender = (Component: any) => ( <Component /> );

export default RoutesComponent;
