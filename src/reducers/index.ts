import {combineReducers}    from 'redux';
//import {routerReducer}      from 'react-router-redux';

import enthusiasmState from './enthusiasmReducer';
import citiesState from './cityReducer';

const rootReducer = combineReducers({
    //routing: routerReducer,
    enthusiasmState,
    citiesState,
    // customersRootReducer,
    // customersAddEditReducer,
});

export default rootReducer;
