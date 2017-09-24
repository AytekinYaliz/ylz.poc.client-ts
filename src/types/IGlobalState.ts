import City from '../models/City';
import ICustomer from '../models/ICustomer';

export interface IGlobalState {
   loaderState: boolean;
   currentUserState: ICurrentUserState;
   citiesState: City[];
   customersState: ICustomersState;
   enthusiasmState: IEnthusiasmState;
}

export interface ICurrentUserState {
   name: string;
}
export interface ICustomersState {
   customers: ICustomer[];
   // selectedCustomer: ICustomer;
}
export interface IEnthusiasmState {
   languageName: string;
   enthusiasmLevel: number;
}
