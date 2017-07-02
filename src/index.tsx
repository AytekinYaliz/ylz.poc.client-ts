import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import Routes from './routes';
// import configureStore   from './store/configureStore';
// import registerServiceWorker from './registerServiceWorker';

import './index.less';
//import '../node_modules/toastr/build/toastr.min.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore.dev';

// import { StoreState } from './types/index';
// import enthusiasmReducer from './reducers/index';


// TODO: the second parameter will be removed and initial values will be put in reducers
const store = configureStore({});
// const store = configureStore({
//     enthusiasmLevel: 1,
//     languageName: 'TypeScript',
// });


// const store = createStore<StoreState>(enthusiasmReducer, {
//     enthusiasmLevel: 1,
//     languageName: 'TypeScript',
// });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app') as HTMLElement
);

registerServiceWorker();



// import './index.less';
// //import '../node_modules/toastr/build/toastr.min.css';

// const store = configureStore();
// store.dispatch(getCities());

// ReactDOM.render (
//     <Provider store={store}>
//         <Routes />
//     </Provider>,
//     document.getElementById('app')
// );

// registerServiceWorker();
