import * as React from 'react';

import './HelloComponent.less';

type Props = {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
};

export const HelloComponent = ({name, enthusiasmLevel = 1, onIncrement, onDecrement}: Props) => {

    //console.log('HelloComponent render.');  //tslint:disable-line

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
