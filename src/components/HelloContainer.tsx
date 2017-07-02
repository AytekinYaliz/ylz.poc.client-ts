import { connect, Dispatch } from 'react-redux';

import * as actions from '../actions/';
import { StoreState } from '../types/index';

import {HelloComponent2} from './HelloComponent';



export function mapStateToProps(state: StoreState) {
    return {
        enthusiasmLevel: state.enthusiasmReducer.enthusiasmLevel,
        name: state.enthusiasmReducer.languageName,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(HelloComponent2);