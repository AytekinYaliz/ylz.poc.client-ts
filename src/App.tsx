import * as React from 'react';

import './App.less';
import * as Hello from './components/HelloComponent';
import HelloContainer from './components/HelloContainer';

const logo = require('./logo.svg');

class App extends React.Component<{}, {}> {
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
                    <Hello.Hello1 name="ayt1" enthusiasmLevel={1} />
                    <HelloContainer />
                    <Hello.HelloComponent3 name="ayt3" enthusiasmLevel={3} />
                    <HelloContainer />
                </div>
            </div>
        );
    }
}

export default App;
