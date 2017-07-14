import { EnthusiasmAction } from '../actions/enthusiasmActions';
import { IEnthusiasmState } from '../types/IGlobalState';
import initialStates from './initialStates';
import * as types from '../actions/actionTypes';

export default function enthusiasmReducer (
    state: IEnthusiasmState = initialStates.enthusiasm, 
    action: EnthusiasmAction
): IEnthusiasmState {
    switch (action.type) {
        case types.INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case types.DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
        default:
            return state;
    }
}
