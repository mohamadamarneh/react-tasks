import React, { Component } from 'react';

const Task1 = () => {
    let a = ["z", "x", "y", "d", "c", "b", "a"];
    // let so = a.map(
    //     function any(x, y, z) {
    //         z.sort()
    //     }
    // )
    let so = a.sort()
    return  (
        <React.Fragment >
            <div className="container"><h1>{so}</h1></div>
            {/* <h1>{a}</h1> */}
            
        </React.Fragment>
    );
}

export default Task1;