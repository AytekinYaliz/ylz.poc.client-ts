import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import { IGlobalState, ICurrentUserState } from '../../types/IGlobalState';
import { IClickEvent } from '../../types/IEvent';
import * as actions from '../../actions/currentUserActions';
import LogoutComponent from './LogoutComponent';

type StateProps = {
    currentUser: ICurrentUserState;
    enthusiasmLevelCount: number;
};
type DispatchProps = {
    logout: () => Promise<actions.CurrentUserActionType>;
};
type OwnProps = {};

class LogoutContainer extends React.Component<StateProps&DispatchProps&OwnProps, {}> {
    logoutClickHandle = (event: IClickEvent): void => {
        this.props
            .logout()
            .then(() => {
                //this.setState({shouldRedirect: true});
                console.log('loged out'); //tslint:disable-line
            })
            .catch((err) => {
                console.log(err); //tslint:disable-line
            });
    }

    render() {
        return (
            <LogoutComponent
                currentUser={this.props.currentUser}
                logoutClick={this.logoutClickHandle}
            />
        );
    }
}
const mapStateToProps = (state: IGlobalState) => {
    return {
        currentUser: state.currentUserState,
        enthusiasmLevelCount: state.enthusiasmState.enthusiasmLevel
    };
};
const mapDispatchToProps = (dispatch: Dispatch<actions.CurrentUserActionType>) => {
    return {
        logout: () => dispatch(actions.logout())
    };
};

export default connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
) (LogoutContainer);
