import {CurrentUserActionType, ILoginSuccess} from '../actions/currentUserActions';
import {ICurrentUserState} from '../types/IGlobalState';
import initialStates from './initialStates';
import * as types from '../actions/actionTypes';

export default function currentUserReducer (
    state: ICurrentUserState = initialStates.currentUser, 
    action: CurrentUserActionType
): ICurrentUserState | null {
    switch (action.type) {
        case types.GET_CURRENTUSER:
            return state;
        case types.LOGIN_BEGIN: {
            return {
                ...state,
                isLoading: true
            };
        }
        case types.LOGIN_SUCCESS: {
            return {
                name: (<ILoginSuccess> action).data.name
            };
        }
        case types.LOGOUT_BEGIN: {
            return {
                ...state,
                isLoading: true
            };
        }
        case types.LOGOUT_SUCCESS: {
            return null;
        }
        default:
            return state;
    }
}
