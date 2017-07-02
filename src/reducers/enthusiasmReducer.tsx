import { EnthusiasmAction } from '../actions';
import { EnthusiasmReducer } from '../types/index';
import * as types from '../actions/actionTypes';

export default function enthusiasmReducer (state: EnthusiasmReducer = {languageName: 'TS', enthusiasmLevel: 4}, action: EnthusiasmAction): EnthusiasmReducer {
    switch (action.type) {
        case types.INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case types.DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
        default:
            return state;
    }
}
