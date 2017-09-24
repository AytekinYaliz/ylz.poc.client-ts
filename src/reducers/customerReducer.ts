import { CustomerActionType, IGetCustomersSuccess } from '../actions/customerActions';
import { ICustomersState } from '../types/IGlobalState';
import initialStates from './initialStates';
import * as types from '../actions/actionTypes';


type ICustomerReducer = (state: ICustomersState, action: CustomerActionType) => ICustomersState | null;

const customerReducer: ICustomerReducer = (
   state: ICustomersState = initialStates.customersState,
   action: CustomerActionType
): ICustomersState | null => {
   switch (action.type) {
      case types.GET_CUSTOMERS_BEGIN: {
         return {
            ...state
         };
      }
      case types.GET_CUSTOMERS_SUCCESS: {
         return {
            ...state,
            customers: (<IGetCustomersSuccess> action).data
         };
      }
      case types.GET_CUSTOMERS_ERROR: {
         return {
            ...state
         };
      }
      default:
         return state;
   }
};

export default customerReducer;
