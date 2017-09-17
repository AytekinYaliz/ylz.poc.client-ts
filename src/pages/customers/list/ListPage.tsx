import { connect, Dispatch } from 'react-redux';

import * as actions from '../../../actions/enthusiasmActions';
import { IGlobalState } from '../../../types/IGlobalState';

import ListComponent from './ListComponent';


const mapStateToProps = (state: IGlobalState) => {
    return {
        // enthusiasmLevel: state.enthusiasmState.enthusiasmLevel,
        // name: state.enthusiasmState.languageName,
    };
};
const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmActionType>) => {
    return {
        // onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        // onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ListComponent);