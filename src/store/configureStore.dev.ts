import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//import {routerMiddleware} from 'react-router-redux';
//import createHistory from 'history/createBrowserHistory';

import {IStoreState} from '../store/IStoreState';
import rootReducer from '../reducers';

// Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches. For development use only!
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';


export default function configureStore(initialState?: IStoreState) {
    // const store = createStore<StoreState>(enthusiasmReducer, {
    //     enthusiasmLevel: 1,
    //     languageName: 'TypeScript',
    // });

    return createStore(
        rootReducer, 
        initialState, 
        applyMiddleware(
            thunk,
            reduxImmutableStateInvariant()
            //routerMiddleware(createHistory())
        )
    );
}
