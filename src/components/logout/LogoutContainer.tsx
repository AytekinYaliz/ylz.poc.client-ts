import * as React from 'react';
import {Redirect} from 'react-router';
import {connect, Dispatch} from 'react-redux';

import {IGlobalState, ICurrentUserState} from '../../types/IGlobalState';
import * as actions from '../../actions/currentUserActions';


type StateProps = {
    currentUser: ICurrentUserState;
    enthusiasmLevelCount: number;
};
type DispatchProps = {
    logout: () => Promise<actions.CurrentUserActionType>;
};
type OwnProps = {};
type Props = StateProps & DispatchProps & OwnProps;

// type State = {
//     count: number;
//     count2?: number;
// };

class LogoutContainer extends React.Component<Props, {}> {
    logout = (): void => {
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
            <div>
                {this.props.currentUser ? (
                    <a onClick={this.logout}>Hello {this.props.currentUser.name}!</a>
                ) : (
                    <Redirect to={'/login'} />
                )}
            </div>
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
)(LogoutContainer);
