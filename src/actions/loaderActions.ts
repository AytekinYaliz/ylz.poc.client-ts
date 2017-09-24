import * as types from './actionTypes';
import {IActionType} from './IActionType';


export interface IAddLoader extends IActionType {}
export interface IRemoveLoader extends IActionType {}

export type LoaderActionType = IAddLoader | IRemoveLoader;

export function addLoader(): IAddLoader {
    return {
        type: types.ADD_LOADER
    };
}
export function removeLoader(): IRemoveLoader {
    return {
        type: types.REMOVE_LOADER
    };
}
