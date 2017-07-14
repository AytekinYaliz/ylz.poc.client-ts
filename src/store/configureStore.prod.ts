import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import {routerMiddleware} from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';

import {IGlobalState} from '../types/IGlobalState';
import rootReducer from '../reducers';


export default function configureStore(initialState?: IGlobalState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunk,
            //routerMiddleware(createHistory())
        )
    );
}
