import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
                Decrease
            </button>
            <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
                Reset
            </button>
        </div>
    );
}

export default Counter;