import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import * as types from '../actions/actionTypes';

const enthusiasmReducer = (state: StoreState = {languageName: 'TS', enthusiasmLevel: 5}, action: EnthusiasmAction): StoreState => {
    switch (action.type) {
        case types.INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case types.DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
        default:
            return state;
    }
};

export default enthusiasmReducer;