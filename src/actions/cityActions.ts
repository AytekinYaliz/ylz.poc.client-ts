import * as types from './actionTypes';
import {IActionType} from './IActionType';


export interface IGetCities extends IActionType {}
export interface ILogCityName extends IActionType {}

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
