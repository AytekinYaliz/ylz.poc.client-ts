import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { connect, Dispatch } from 'react-redux';
//import firebase from 'firebase';

import { IGlobalState, ICurrentUserState } from '../../types/IGlobalState';
import { IClickEvent } from '../../types/IEvent';
import * as actions from '../../actions/currentUserActions';
import LoginComponent from './LoginComponent';


type Props = {
    currentUser: ICurrentUserState;
    enthusiasmLevelCount: number;
    login: (user: ICurrentUserState) => Promise<actions.CurrentUserActionType>;
};

class LoginPage extends React.Component<Props, {}> {
    static contextTypes = {
        router: PropTypes.object
    };
    loginClickHandle = (event: IClickEvent): void => {
        event.preventDefault();
        // firebase.auth().signInWithEmailAndPassword(
        //     this.state.email, this.state.password
        // );
        this.props
            .login( {name: 'AYTEK'} )
            .then(() => {
                this.context.router.history.replace('/login');
            })
            .catch((err) => {
                console.log(err); //tslint:disable-line
            });
    }

    render() {
        return (
            <div>
                {this.props.currentUser
                    ? <Redirect to={'/'} />
                    : <LoginComponent loginClick={this.loginClickHandle} /> }
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
        login: (user: ICurrentUserState) => dispatch(actions.login(user))
    };
};

export default connect (
    mapStateToProps,
    mapDispatchToProps
) (LoginPage);
