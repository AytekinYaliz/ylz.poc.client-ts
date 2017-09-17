import * as React from 'react';
import {IClickEvent} from '../../types/IEvent';


type TLogoutComponent = {
    currentUser: {name: string}
    logoutClick: (event: IClickEvent) => void
};

const LogoutComponent = (props: TLogoutComponent) => {
    return (
        <div>
            {props.currentUser &&
                <span onClick={props.logoutClick}>Hello {props.currentUser.name}!</span>
            }
        </div>
    );
};

export default LogoutComponent;
