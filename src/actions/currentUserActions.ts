import * as types from './actionTypes';
import { IActionType, IActionWithDataType } from './IActionType';
import { Dispatch } from 'react-redux';

import Config, { ConfigKeysEnum } from '../libs/Config';
import LocalStorage from '../libs/LocalStorage';

export interface IGetCurrentUser extends IActionType {}
export interface ILoginBegin extends IActionType {}
export interface ILoginSuccess extends IActionWithDataType {}
export interface ILoginError extends IActionWithDataType {}
export interface ILogoutBegin extends IActionType {}
export interface ILogoutSuccess extends IActionWithDataType {}
export interface ILogoutError extends IActionWithDataType {}

export type CurrentUserActionType = IGetCurrentUser | 
    ILoginBegin | ILoginSuccess | ILoginError |
    ILogoutBegin | ILogoutSuccess | ILogoutError;


export const loginBegin = () => {
    return {type: types.LOGIN_BEGIN};
};
export const loginSuccess = (data: {name: string}) => {
    return {type: types.LOGIN_SUCCESS, data: data};
};
export const loginError = (data: {}) => {
    return {type: types.LOGIN_ERROR, data};
};

export const logoutBegin = () => {
    return {type: types.LOGOUT_BEGIN};
};
export const logoutSuccess = () => {
    return {type: types.LOGOUT_SUCCESS};
};
export const logoutError = (data: {}) => {
    return {type: types.LOGOUT_ERROR, data};
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
                LocalStorage.add(Config.getConfig(ConfigKeysEnum.localStorageKey), 'some cookies from app');

                resolve( dispatch(loginSuccess(user)) );
            }, 500);
        });
    };
}
export function logout() {
    return (dispatch: Dispatch<CurrentUserActionType>) => {
        dispatch(logoutBegin());

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                LocalStorage.remove(Config.getConfig(ConfigKeysEnum.localStorageKey));

                resolve( dispatch(logoutSuccess()) );
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
