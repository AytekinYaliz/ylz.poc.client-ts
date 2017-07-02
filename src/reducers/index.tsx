import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import * as types from '../actions/actionTypes';

export function enthusiasmReducer(state: StoreState, action: EnthusiasmAction): StoreState {
    switch (action.type) {
        case types.INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case types.DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
        default:
            return state;
    }
}