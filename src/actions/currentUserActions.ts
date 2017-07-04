import * as constants from './actionTypes';

export interface IGetCurrentUser {
    type: constants.GET_CURRENTUSER;
}
export interface ILogout {
    type: constants.LOGOUT_CURRENTUSER;
}

export type CurrentUserActionType = IGetCurrentUser | ILogout;

export function getCurrentUser(): IGetCurrentUser {
    return {
        type: constants.GET_CURRENTUSER
    };
}
export function logout(): ILogout {
    return {
        type: constants.LOGOUT_CURRENTUSER
    };
}