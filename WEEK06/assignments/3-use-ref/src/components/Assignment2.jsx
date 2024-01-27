import React, { useState, useCallback, useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const count = useRef(0)
    const [key, setKey] = useState(0);
    const handleReRender = ()=> {
        count.current++;
        setKey(prevKey => prevKey + 1);
    }

    return (
        <div>
            <p>This component has rendered {count.current} times.</p>
            <button onClick={handleReRender}>Force Re-render, key - {key}</button>
        </div>
    );
};