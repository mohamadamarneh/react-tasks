import React, { useState, useEffect } from 'react';

const Count = () => {
    const [con, setCon] = useState(0)
    let [name, setName] = useState('init name')
    const [count, setCount] = useState(0);

    // setTimeout(() => {
    //     setCount((count) => count + 1);
    //   }, 1000);
    useEffect(() => {
        console.log("from effect");
    }, [name])

    return (
        <div>
            <h2>{count}</h2>
            <h1>{name}</h1>
            <h1>{con}</h1>
            {console.log(con)}

            <input type="text" onChange={e => setName(e.target.value)} />
            <button onClick={() => setCon(con + 1)}>+</button>
        </div>

    );
}

export default Count;