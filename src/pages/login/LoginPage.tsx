import * as React from 'react';
//import firebase from 'firebase';

class LoginPage extends React.Component<{}, {}> {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         email: '',
    //         password: ''
    //     };
    // }
    login() {
        // firebase.auth().signInWithEmailAndPassword(
        //     this.state.email, this.state.password
        // );
    }
    logout() {
        //firebase.auth().signOut();
    }

    render() {
        return(
            <div>
                <h1>Login</h1>
            </div>
        );
    }
}
export default LoginPage;
