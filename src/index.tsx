import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import './index.less';
import App from './components/app/App';
//import '../node_modules/toastr/build/toastr.min.css';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore.dev';
import initialStates from './reducers/initialStates';
import {getCities} from './actions/cityActions';


const store = configureStore(initialStates),
    history = createBrowserHistory();

store.dispatch(getCities());

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app') as HTMLElement
);

registerServiceWorker();
