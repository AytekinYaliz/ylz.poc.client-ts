import * as types from './actionTypes';
import IActionType from './IActionType';
import { Dispatch } from 'react-redux';


export interface IGetCurrentUser extends IActionType {}
export interface ILogoutBegin extends IActionType {}
export interface ILogoutSuccess extends IActionType {}
export interface ILogoutError extends IActionType {}

export type CurrentUserActionType = IGetCurrentUser | ILogoutBegin | ILogoutSuccess | ILogoutError;


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
