import * as types from './actionTypes';
import { Dispatch } from 'react-redux';


export interface IGetCurrentUser {
    type: types.GET_CURRENTUSER;
}
// export interface ILogout {
//     type: types.LOGOUT;
// }

export type CurrentUserAction = IGetCurrentUser | ILogoutBegin | ILogoutSuccess | ILogoutError;

export function getCurrentUser(): IGetCurrentUser {
    return {
        type: types.GET_CURRENTUSER
    };
}
// export function logout(): ILogout {
//     return {
//         type: types.LOGOUT
//     };
// }


export interface ILogoutBegin {
    type: types.LOGOUT_BEGIN;
}
export interface ILogoutSuccess {
    type: types.LOGOUT_SUCCESS;
}
export interface ILogoutError {
    type: types.LOGOUT_ERROR;
}

export const logoutBegin = () => {
    return {type: types.LOGOUT_BEGIN};
};
export const logoutSuccess = (data: string) => {
    return {type: types.LOGOUT_SUCCESS, data};
};
export const logoutError = (error: {}) => {
    return {type: types.LOGOUT_ERROR, error};
};

export function logout() {
    return (dispatch: Dispatch<CurrentUserAction>) => {
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
