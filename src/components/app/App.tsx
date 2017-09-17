import * as React from 'react';
// import * as PropTypes from 'prop-types';
import { connect, Dispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { IGlobalState, ICurrentUserState } from '../../types/IGlobalState';
import LocalStorage from '../../libs/LocalStorage';

import './App.less';
import Routes from './Routes';
import Config, { ConfigKeysEnum } from '../../libs/Config';


type StateProps = {
    isLoading: boolean;
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

    constructor(props: Props) {
        super(props);
    }
    componentDidMount() {
        // fireabase.auth().onAuthStateChanged(user => {
        //     this.setState({user});
        // });

        if (LocalStorage.isLocalStorageSupported) {
            let key = LocalStorage.get( Config.getConfig(ConfigKeysEnum.localStorageKey) );

            if (key === null) {
                LocalStorage.add(Config.getConfig(ConfigKeysEnum.localStorageKey), 'some cookies from app');
            } else {
                console.log('LS:', key);   //tslint:disable-line
            }
        }
    }

    render() {
        return (
            <div>
                {this.props.isLoading ? (
                    <div>asdf</div>
                ) : (
                    <Routes currentUser={this.props.currentUser} />
                )}
            </div>
        );
    }
}
const mapStateToProps = (state: IGlobalState) => {
    return {
        isLoading: state.isLoadingState,
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
) (App));
