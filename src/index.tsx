import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import {Provider} from 'react-redux';

// import Routes from './routes';
// import configureStore   from './store/configureStore';
// import registerServiceWorker from './registerServiceWorker';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.less';

ReactDOM.render(
  <App />,
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

