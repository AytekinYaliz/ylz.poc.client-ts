import { LoaderActionType } from '../actions/loaderActions';
import initialStates from './initialStates';
import * as types from '../actions/actionTypes';


type ILoaderReducer = (state: boolean, action: LoaderActionType) => boolean;

const loaderReducer: ILoaderReducer = (
    state: boolean = initialStates.loaderState,
    action: LoaderActionType
): boolean => {
    switch (action.type) {
        case types.ADD_LOADER: {
            return true;
        }
        case types.REMOVE_LOADER: {
            return false;
        }
        default:
            return state;
    }
};

export default loaderReducer;
