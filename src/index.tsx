import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import {Route} from 'react-router-dom';


import './index.less';
//import '../node_modules/toastr/build/toastr.min.css';

//import App from './App';
//import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore.dev';
import {getCities} from './actions/cityActions';

const store = configureStore();
store.dispatch(getCities());

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        {/*<App />*/}

        <ConnectedRouter history={history}>
            <div>
                <Route path="/" render={() => ( <div>dddd</div> )} />
            </div>            
        </ConnectedRouter>
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
