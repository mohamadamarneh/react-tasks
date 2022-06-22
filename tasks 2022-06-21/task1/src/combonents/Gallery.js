import React, { Component } from 'react';



function Gall() {

    let rand="1";
    let ex= Math.floor(Math.random() * 9);

    let ur="https://picsum.photos/20" ;
    return (<React.Fragment>
        <div class='container'>
        <div class="card">
            <div class="card-body">
            <img src={ur+ex}alt="" />
            </div>
        </div>
        </div>
    </React.Fragment>);


}
export default Gall;