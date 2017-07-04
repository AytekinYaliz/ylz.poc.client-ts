import * as React from 'react';

import './App.less';
import HelloContainer from '..//HelloContainer';
import CityContainer from '../CityContainer';

const logo = require('./logo.svg');

class App extends React.Component<{}, {}> {
    onClickHandle = (val: string) => {
        console.log(`Hello from app: ${val}`);  //eslint-disable-line
    }
    
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.<br />
                </p>
                <div>
                    <HelloContainer />
                    <CityContainer onClick={this.onClickHandle} />
                    <HelloContainer />
                </div>
            </div>
        );
    }
}

export default App;
