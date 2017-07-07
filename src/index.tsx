import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.less';
//import '../node_modules/toastr/build/toastr.min.css';

import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore.dev';
import {getCities} from './actions/cityActions';

const store = configureStore();
store.dispatch(getCities());

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('app') as HTMLElement
);

registerServiceWorker();