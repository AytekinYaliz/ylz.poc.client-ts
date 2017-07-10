import * as React from 'react';
import {Redirect} from 'react-router';
import {connect, Dispatch} from 'react-redux';
//import firebase from 'firebase';

import {IGlobalState, ICurrentUserState} from '../../store/IGlobalState';
import * as actions from '../../actions/currentUserActions';


type StateProps = {
    currentUser: ICurrentUserState;
};
type DispatchProps = {
    login: (user: {name: string}) => Promise<actions.CurrentUserActionType>;
};
type OwnProps = {};
type Props = StateProps & DispatchProps & OwnProps;

// type State = {
//     count: number;
//     count2?: number;
// };

class LoginPage extends React.Component<Props, {}> {
    login = (): void => {
        // firebase.auth().signInWithEmailAndPassword(
        //     this.state.email, this.state.password
        // );
        this.props
            .login({name: 'AYTEK IN LOGINPAGE'})
            .then(() => {
                //this.setState({shouldRedirect: true});
                console.log('loged in'); //tslint:disable-line
            })
            .catch((err) => {
                console.log(err); //tslint:disable-line
            });
    }

    render() {
        return(
            <div>
                {this.props.currentUser ? (
                    <Redirect to={'/'} />
                ) : (
                    <a onClick={this.login}>Login</a>
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
        login: (user: {name: string}) => dispatch(actions.login(user))
    };
};

export default connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);
