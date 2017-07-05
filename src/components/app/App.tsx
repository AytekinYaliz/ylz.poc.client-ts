import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Route /*, Switch*/ } from 'react-router-dom';

import { IStoreState, ICurrentUserState } from '../../store/IStoreState';

import './App.less';
import HomePage from '../../pages/home/HomePage';
import HeaderComponent from '../header/HeaderComponent';
import FooterComponent from '../footer/FooterComponent';


type StateProps = {
    currentUser: ICurrentUserState;
};
type DispatchProps = {
};
type OwnProps = {
};
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
                    <Route exact={true} path="/" component={HomePage as any} />
                ) : (
                    <Route exact={true} path="/" component={HomePage as any} />
                )}
                <FooterComponent />
            </div>
        );
    }
}
const mapStateToProps = (state: IStoreState) => {
    return {
        currentUser: state.currentUserState
    };
};
const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
    return {
        //logout: () => {}  //dispatch(currentUserActions.logout())
    };
};

export default connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
)(App);
