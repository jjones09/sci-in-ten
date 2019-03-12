import { useState } from 'react';

const getStateManipulator = (defaultVal) => {
    const [val, valFunc] = useState(defaultVal);

    const handleValChange = (newVal) => {
        valFunc(newVal);
    }

    return {
        value: val,
        setState: (newState) => handleValChange(newState)
    };
}

export default { getStateManipulator };