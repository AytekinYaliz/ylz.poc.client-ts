import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { IGlobalState, ICurrentUserState } from '../../types/IGlobalState';
import LocalStorage from '../../libs/LocalStorage';

import './App.less';
import Routes from './Routes';


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
    lsKey = 'LH.Accountancy';

    componentDidMount() {
        // fireabase.auth().onAuthStateChanged(user => {
        //     this.setState({user});
        // });
        
        if (LocalStorage.isLocalStorageSupported) {
            let key = LocalStorage.get(this.lsKey);

            if (key === null) {
                LocalStorage.add(this.lsKey, 'some cookies from app');
            } else {
                console.log('LS', key);   //tslint:disable-line
            }
        }
    }

    render() {
        return (
            <Routes currentUser={this.props.currentUser} />
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

export default withRouter(connect<StateProps, DispatchProps, null>(
    mapStateToProps,
    mapDispatchToProps
)(App));
