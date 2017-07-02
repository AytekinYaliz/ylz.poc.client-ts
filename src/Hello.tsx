import * as React from 'react';

export interface HelloProps {
    name: string;
    enthusiasmLevel?: number;
}

export const Hello1 = (props: HelloProps) =>
    <h1>Hello from {props.name} {getExclamationMarks(props.enthusiasmLevel)}!</h1>;

export const Hello2 = ({ name, enthusiasmLevel = 1 }: HelloProps) => {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + ' ' + getExclamationMarks(enthusiasmLevel)}
            </div>
        </div>
    );
};

export class Hello3 extends React.Component<HelloProps, object> {
    render() {
        const { name, enthusiasmLevel = 1 } = this.props;

        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + ' ' + getExclamationMarks(enthusiasmLevel)}
                </div>
            </div>
        );
    }
}

// helpers

function getExclamationMarks(numChars?: number) {
    return Array(numChars ? numChars + 1 : 1).join('!');
}
