import React, { useState } from 'react';
import '../App.css';

function Counter(props) {
    let [count, setCount] = useState(0);


    return (
        <div>
            <h3>Value of Counter variable is: {count} </h3>
            {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
            <button onClick={() => setCount(++count)}>Increment</button>
            {/* <button onClick={() => setCount(count - 1)}>decrement</button> */}
            <button onClick={() => setCount(--count)}>decrement</button>
        </div>
    )
}

export default Counter;