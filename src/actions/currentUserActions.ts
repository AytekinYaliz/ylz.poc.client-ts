import * as types from './actionTypes';
import IActionType from './IActionType';
import { Dispatch } from 'react-redux';


export interface IGetCurrentUser extends IActionType {}
export interface ILoginBegin extends IActionType {}
export interface ILoginSuccess extends IActionType {}
export interface ILoginError extends IActionType {}
export interface ILogoutBegin extends IActionType {}
export interface ILogoutSuccess extends IActionType {}
export interface ILogoutError extends IActionType {}

export type CurrentUserActionType = IGetCurrentUser | ILogoutBegin | ILogoutSuccess | ILogoutError;


export const loginBegin = () => {
    return {type: types.LOGIN_BEGIN};
};
export const loginSuccess = (data: {name: string}) => {
    return {type: types.LOGIN_SUCCESS, data};
};
export const loginError = (error: {}) => {
    return {type: types.LOGIN_ERROR, error};
};

export const logoutBegin = () => {
    return {type: types.LOGOUT_BEGIN};
};
export const logoutSuccess = (data: string) => {
    return {type: types.LOGOUT_SUCCESS, data};
};
export const logoutError = (error: {}) => {
    return {type: types.LOGOUT_ERROR, error};
};


export function getCurrentUser(): IGetCurrentUser {
    return {
        type: types.GET_CURRENTUSER
    };
}
export function login(user: {name: string}) {
    return (dispatch: Dispatch<CurrentUserActionType>) => {
        dispatch(loginBegin());

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('login.actions');  //tslint:disable-line

                return dispatch(loginSuccess({name: 'aytek'}));
            }, 500);
        });
    };
}
export function logout() {
    return (dispatch: Dispatch<CurrentUserActionType>) => {
        dispatch(logoutBegin());

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //return resolve(people)
                console.log('logout.actions');  //tslint:disable-line

                return dispatch(logoutSuccess('okk'));
            }, 500);
        });

        // api.getApi(
        //     dispatch,
        //     getConfig(configTypes.apiBaseUrl) + getConfig(configTypes.citiesEndpoint)
        // )
        //     .then(data => dispatch(getCitiesSuccess(data)))
        //     .catch(error => dispatch(getCitiesError(error)));
    };
}
