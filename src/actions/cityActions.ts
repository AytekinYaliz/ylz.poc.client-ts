// import * as constants from './actionTypes';


// export interface IncrementEnthusiasm {
//     type: constants.INCREMENT_ENTHUSIASM;
// }
// export interface DecrementEnthusiasm {
//     type: constants.DECREMENT_ENTHUSIASM;
// }

// export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

// export function incrementEnthusiasm(): IncrementEnthusiasm {
//     return {
//         type: constants.INCREMENT_ENTHUSIASM
//     };
// }
// export function decrementEnthusiasm(): DecrementEnthusiasm {
//     return {
//         type: constants.DECREMENT_ENTHUSIASM
//     };
// }




import * as constants from './actionTypes';

export interface IGetCities {
    type: constants.GET_CITIES;
}
export interface ILogCityName {
    type: constants.LOG_CITYNAME;
}

export type CityActionType = IGetCities | ILogCityName;

export function getCities(): IGetCities {
    return {
        type: constants.GET_CITIES
    };
}
export function logCityName(): ILogCityName {
    return {
        type: constants.LOG_CITYNAME
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
