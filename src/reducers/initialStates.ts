import City from '../models/City';
import ICustomer from '../models/ICustomer';

export default {
   loaderState: false,
   currentUserState: { name: 'INI-ALL' },    // null,
   citiesState: Array<City>(),
   customersState: {
      customers: Array<ICustomer>(),
      // selectedCustomer: <ICustomer> null
   },
   enthusiasmState: {
      languageName: 'TS',
      enthusiasmLevel: 4
   }
};
