//import * as React from 'react';

import './HelloComponent.less';

type PropType = {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
};
// type StateType = {
//     count: number;
// };

// export const Hello1 = (props: HelloProps) =>
//     <h1>Hello from {props.name} {getExclamationMarks(props.enthusiasmLevel)}!</h1>;

export const HelloComponent = ({name, enthusiasmLevel = 1, onIncrement, onDecrement}: PropType) => {
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



// helpers
function getExclamationMarks(numChars?: number): String {
    return `[${numChars}]`;
}
