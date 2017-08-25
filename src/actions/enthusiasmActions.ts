import * as types from './actionTypes';


export interface IIncrementEnthusiasm {
    type: types.INCREMENT_ENTHUSIASM;
}
export interface IDecrementEnthusiasm {
    type: types.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmActionType = IIncrementEnthusiasm | IDecrementEnthusiasm;

export function incrementEnthusiasm(): IIncrementEnthusiasm {
    return {
        type: types.INCREMENT_ENTHUSIASM
    };
}
export function decrementEnthusiasm(): IDecrementEnthusiasm {
    return {
        type: types.DECREMENT_ENTHUSIASM
    };
}