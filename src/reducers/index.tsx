import {combineReducers}    from 'redux';
//import {routerReducer}      from 'react-router-redux';

import enthusiasmReducer from './enthusiasmReducer';

const rootReducer = combineReducers({
    //routing: routerReducer,
    enthusiasmReducer,
    // cityReducer,
    // customersRootReducer,
    // customersAddEditReducer,
});

export default rootReducer;
