import {combineReducers}    from 'redux';
//import {routerReducer}      from 'react-router-redux';

import currentUserState from './currentUserReducer';
import loaderState from './loaderReducer';
import citiesState from './cityReducer';
import customersState from './customerReducer';
import enthusiasmState from './enthusiasmReducer';

const rootReducer = combineReducers({
    //routing: routerReducer,
    loaderState,
    currentUserState,
    citiesState,
    customersState,
    enthusiasmState
    // customersRootReducer,
    // customersAddEditReducer,
});

export default rootReducer;
