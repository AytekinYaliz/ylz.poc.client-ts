import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import './index.less';
import App from './components/app/App';
//import '../node_modules/toastr/build/toastr.min.css';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore.dev';
import {getCities} from './actions/cityActions';


const store = configureStore(),
    history = createBrowserHistory();

store.dispatch(getCities());

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app') as HTMLElement
);

registerServiceWorker();