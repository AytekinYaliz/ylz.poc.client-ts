import Axios, { AxiosResponse, AxiosError } from 'axios';
import { Dispatch } from 'react-redux';

import * as types from './actionTypes';
import { IActionType, IActionWithDataType } from './IActionType';
import ICustomer from '../models/ICustomer';
import Config, { ConfigKeysEnum } from '../libs/Config';


export interface IGetCustomersBegin extends IActionType {}
export interface IGetCustomersSuccess extends IActionWithDataType<ICustomer[]> {}
export interface IGetCustomersError extends IActionWithDataType<{}> {}

export type CustomerActionType = IGetCustomersBegin | IGetCustomersSuccess | IGetCustomersError;

function getCustomersBegin() {
   return {type: types.GET_CUSTOMERS_BEGIN};
}
function getCustomersSuccess(data: ICustomer[]) {
   return {type: types.GET_CUSTOMERS_SUCCESS, data};
}
function getCustomersError(data: {}) {
   return {type: types.GET_CUSTOMERS_ERROR, data};
}

export function getCustomers() {
   return (dispatch: Dispatch<CustomerActionType>) => {
      dispatch(getCustomersBegin());

      return Axios.get(Config.getConfig(ConfigKeysEnum.apiBaseUrl) + Config.getConfig(ConfigKeysEnum.customersEndpoint))
         .then( (response: AxiosResponse) => dispatch(getCustomersSuccess(<ICustomer[]> response.data)) )
         .catch( (error: AxiosError) => dispatch(getCustomersError(error)) );
   };
}
