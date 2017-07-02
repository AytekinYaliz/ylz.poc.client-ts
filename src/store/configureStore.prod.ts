import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import {routerMiddleware} from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';

import {IStoreState} from '../store/IStoreState';
import rootReducer from '../reducers';


export default function configureStore(initialState?: IStoreState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunk,
            //routerMiddleware(createHistory())
        )
    );
}
