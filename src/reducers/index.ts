import {combineReducers}    from 'redux';
//import {routerReducer}      from 'react-router-redux';

import currentUserState from './currentUserReducer';
import citiesState from './cityReducer';
import enthusiasmState from './enthusiasmReducer';

const rootReducer = combineReducers({
    //routing: routerReducer,
    isLoading: Boolean,
    currentUserState,
    enthusiasmState,
    citiesState,
    // customersRootReducer,
    // customersAddEditReducer,
});

export default rootReducer;
