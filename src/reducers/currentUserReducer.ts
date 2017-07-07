import { CurrentUserAction } from '../actions/currentUserActions';
import { ICurrentUserState } from '../store/IStoreState';
import initialStates from './initialStates';
import * as types from '../actions/actionTypes';

export default function currentUserReducer (
    state: ICurrentUserState = initialStates.currentUser, 
    action: CurrentUserAction
): ICurrentUserState | null {
    switch (action.type) {
        case types.GET_CURRENTUSER:
            return state;
        case types.LOGOUT:
            return null;
        default:
            return state;
    }
}
