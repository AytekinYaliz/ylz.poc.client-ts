import {combineReducers}    from 'redux';
//import {routerReducer}      from 'react-router-redux';

import currentUserState from './currentUserReducer';
import citiesState from './cityReducer';
import customersState from './customerReducer';
import enthusiasmState from './enthusiasmReducer';

const rootReducer = combineReducers({
    //routing: routerReducer,
    isLoadingState: Boolean,
    currentUserState,
    enthusiasmState,
    citiesState,
    customersState
    // customersRootReducer,
    // customersAddEditReducer,
});

export default rootReducer;
