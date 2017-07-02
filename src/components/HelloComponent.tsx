import * as React from 'react';

import './HelloComponent.less';

interface HelloProps {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}
interface HelloState {
    count: number;
}

export const Hello1 = (props: HelloProps) =>
    <h1>Hello from {props.name} {getExclamationMarks(props.enthusiasmLevel)}!</h1>;

export const HelloComponent2 = ({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: HelloProps) => {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    );
};

export class HelloComponent3 extends React.Component<HelloProps, HelloState> {
    state = {
        count: 0
    };

    constructor(props: HelloProps) {
        super(props);

        setTimeout(() => {
            this.setState({ count: 1 });
        }, 2000);
    }

    render() {
        // const { name, enthusiasmLevel = 1 } = this.props;

        if (!this.props.enthusiasmLevel || this.props.enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {`${this.props.name} ${getExclamationMarks(this.props.enthusiasmLevel)} [${this.state.count}]`}
                </div>
                <div>
                    <button onClick={this.props.onDecrement}>-</button>
                    <button onClick={this.props.onIncrement}>+</button>
                </div>
            </div>
        );
    }
}

// helpers
function getExclamationMarks(numChars?: number): String {
    //return Array(numChars ? numChars + 1 : 1).join('!');
    return `[${numChars}]`;
}
