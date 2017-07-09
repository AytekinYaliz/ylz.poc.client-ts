import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import { IGlobalState, ICurrentUserState } from '../../store/IGlobalState';

import './App.less';
import HomePage from '../../pages/home/HomePage';
import HeaderComponent from '../header/HeaderComponent';
import FooterComponent from '../footer/FooterComponent';
import CustomersPage from '../../pages/customers/CustomersPage';


type StateProps = {
    currentUser: ICurrentUserState;
};
type DispatchProps = {};
type OwnProps = {};
type Props = StateProps & DispatchProps & OwnProps;

// type State = {
//     count: number;
//     count2?: number;
// };

class App extends React.Component<Props, {}> {
    render() {
        return (
            <div className="container">
                <HeaderComponent />
                {this.props.currentUser ? (
                    <Switch>
                        <Route exact={true} path="/" component={HomePage as any} />
                        <Route exact={true} path="/customers" component={CustomersPage as any} />
                    </Switch>
                ) : (
                    <Switch>
                        <Route exact={true} path="/" component={HomePage as any} />
                        <Route exact={true} path="/customers" component={CustomersPage as any} />
                    </Switch>
                )}
                <FooterComponent />
            </div>
        );
    }
}
const mapStateToProps = (state: IGlobalState) => {
    return {
        currentUser: state.currentUserState
    };
};
const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
    return {
        //logout: () => {}  //dispatch(currentUserActions.logout())
    };
};

export default withRouter(connect<StateProps, DispatchProps, any>(
    mapStateToProps,
    mapDispatchToProps
)(App));
