import * as React from 'react';

import './App.less';
import * as Hello from './Hello';

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
                    <Hello.Hello1 name="aytekin1" enthusiasmLevel={1} />
                    <Hello.Hello2 name="aytekin2" enthusiasmLevel={2} />
                    <Hello.Hello3 name="aytekin3" enthusiasmLevel={3} />
                </div>
            </div>
        );
    }
}

export default App;
