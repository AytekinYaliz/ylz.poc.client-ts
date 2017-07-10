// import * as types from './actionTypes';


// export interface IncrementEnthusiasm {
//     type: types.INCREMENT_ENTHUSIASM;
// }
// export interface DecrementEnthusiasm {
//     type: types.DECREMENT_ENTHUSIASM;
// }

// export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

// export function incrementEnthusiasm(): IncrementEnthusiasm {
//     return {
//         type: types.INCREMENT_ENTHUSIASM
//     };
// }
// export function decrementEnthusiasm(): DecrementEnthusiasm {
//     return {
//         type: types.DECREMENT_ENTHUSIASM
//     };
// }




import * as types from './actionTypes';

export interface IGetCities {
    type: types.GET_CITIES;
}
export interface ILogCityName {
    type: types.LOG_CITYNAME;
}

export type CityActionType = IGetCities | ILogCityName;

export function getCities(): IGetCities {
    return {
        type: types.GET_CITIES
    };
}
export function logCityName(): ILogCityName {
    return {
        type: types.LOG_CITYNAME
    };
}


// export const getCitiesBegin = () => {
//     return {type: types.GET_CITIES_BEGIN};
// };
// export const getCitiesSuccess = (data) => {
//     return {type: types.GET_CITIES_SUCCESS, data};
// };
// export const getCitiesError = (error) => {
//     return {type: types.GET_CITIES_ERROR, error};
// };
// export function getCities() {
//     return function(dispatch) {
//         dispatch(getCitiesBegin());

//         api.getApi(
//             dispatch,
//             getConfig(configTypes.apiBaseUrl) + getConfig(configTypes.citiesEndpoint)
//         )
//             .then(data => dispatch(getCitiesSuccess(data)))
//             .catch(error => dispatch(getCitiesError(error)));
//     };
// }
