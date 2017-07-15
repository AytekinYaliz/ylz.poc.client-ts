import * as React from 'react';
import {IClickEvent} from '../../types/IEvent';

type TLoginComponent = {
    loginClick: (event: IClickEvent) => void
};

const LoginComponent = (props: TLoginComponent) => {
    return (
        <a onClick={props.loginClick}>LOGINN!</a>
    );
};

export default LoginComponent;