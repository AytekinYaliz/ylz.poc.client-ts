import * as React from 'react';
import {IClickEvent} from '../../types/IEvent';

type TLoginComponent = {
    loginClick: (event: IClickEvent) => void
};

const LogoutComponent = (props: TLoginComponent) => {
    let stylee = {
        padding: '20px'
    };
    return (
        <div style={stylee}>
            <a href="#" onClick={props.loginClick}>LOGINN!</a>
        </div>
    );
};

export default LogoutComponent;