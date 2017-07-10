import { CurrentUserActionType } from '../actions/currentUserActions';
import { ICurrentUserState } from '../store/IGlobalState';
import initialStates from './initialStates';
import * as types from '../actions/actionTypes';

export default function currentUserReducer (
    state: ICurrentUserState = initialStates.currentUser, 
    action: CurrentUserActionType
): ICurrentUserState | null {
    switch (action.type) {
        case types.GET_CURRENTUSER:
            return state;
        case types.LOGOUT_BEGIN: {
            console.log('Logout.reducer.state.begin:', state); //tslint:disable-line
            
            return state;
        }
        case types.LOGOUT_SUCCESS: {
            console.log('Logout.reducer.action:', action); //tslint:disable-line
            console.log('Logout.reducer.state:', state); //tslint:disable-line
            
            return null;
        }
        default:
            return state;
    }
}
