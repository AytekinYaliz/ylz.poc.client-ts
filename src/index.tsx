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
import {getCities} from './actions/cityActions';

// import { StoreState } from './types/index';
// import enthusiasmReducer from './reducers/index';


const store = configureStore();
store.dispatch(getCities());

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
