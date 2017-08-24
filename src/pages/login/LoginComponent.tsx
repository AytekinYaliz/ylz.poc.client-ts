import * as React from 'react';
import {IClickEvent} from '../../types/IEvent';

type TLoginComponent = {
    loginClick: (event: IClickEvent) => void
};

const LogoutComponent = (props: TLoginComponent) => {
    return (
        <a onClick={props.loginClick}>LOGINN!</a>
    );
};

export default LogoutComponent;