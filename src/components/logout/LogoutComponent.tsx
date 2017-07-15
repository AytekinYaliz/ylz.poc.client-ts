import * as React from 'react';
import {Redirect} from 'react-router';

import {IClickEvent} from '../../types/IEvent';

type TLogoutComponent = {
    currentUser: {name: string}
    logoutClick: (event: IClickEvent) => void
};

const LoginComponent = (props: TLogoutComponent) => {
    return (
        <div>
            {props.currentUser ? (
                <a onClick={props.logoutClick}>Hello {props.currentUser.name}!</a>
            ) : (
                <Redirect to={'/login'} />
            )}
        </div>
    );
};

export default LoginComponent;