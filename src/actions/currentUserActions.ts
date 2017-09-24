import * as types from './actionTypes';
import { Dispatch } from 'react-redux';

import { IActionType, IActionWithDataType } from './IActionType';
import { addLoader, removeLoader } from './loaderActions';
import Config, { ConfigKeysEnum } from '../libs/Config';
import LocalStorage from '../libs/LocalStorage';


export interface IGetCurrentUser extends IActionType {}
export interface ILoginBegin extends IActionType {}
export interface ILoginSuccess extends IActionWithDataType<{name: string}> {}
export interface ILoginError extends IActionWithDataType<{}> {}
export interface ILogoutBegin extends IActionType {}
export interface ILogoutSuccess extends IActionWithDataType<void> {}
export interface ILogoutError extends IActionWithDataType<{}> {}

export type CurrentUserActionType = IGetCurrentUser |
    ILoginBegin | ILoginSuccess | ILoginError |
    ILogoutBegin | ILogoutSuccess | ILogoutError;

function loginSuccess(data: {name: string}) {
   return {type: types.LOGIN_SUCCESS, data: data};
}
function loginError(data: {}) {
   return {type: types.LOGIN_ERROR, data};
}

function logoutSuccess() {
   return {type: types.LOGOUT_SUCCESS};
}
function logoutError(data: {}) {
   return {type: types.LOGOUT_ERROR, data};
}


export function getCurrentUser(): IGetCurrentUser {
   return {
      type: types.GET_CURRENTUSER
   };
}
export function login(user: {name: string}) {
   return (dispatch: Dispatch<CurrentUserActionType>) => {
      dispatch(addLoader());

      return new Promise((resolve, reject) => {
         setTimeout(() => {
            LocalStorage.add(Config.getConfig(ConfigKeysEnum.localStorageKey), 'some cookies from app');

            dispatch(removeLoader());
            resolve( dispatch(loginSuccess(user)) );
         }, 500);
      });
   };
}
export function logout() {
   return (dispatch: Dispatch<CurrentUserActionType>) => {
      dispatch(addLoader());

      return new Promise((resolve, reject) => {
         setTimeout(() => {
            LocalStorage.remove(Config.getConfig(ConfigKeysEnum.localStorageKey));

            dispatch(removeLoader());
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
