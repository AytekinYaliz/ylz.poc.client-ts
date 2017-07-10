import * as types from './actionTypes';


export interface IncrementEnthusiasm {
    type: types.INCREMENT_ENTHUSIASM;
}
export interface DecrementEnthusiasm {
    type: types.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: types.INCREMENT_ENTHUSIASM
    };
}
export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: types.DECREMENT_ENTHUSIASM
    };
}