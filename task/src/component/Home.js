
import React, { Component } from 'react';


// const Home = () => {
//     return (
//         <React.Fragment>
//             <h1>wellcome to home my friend </h1>
//             <div class="card text-left">

//                 <div class="card-body">
//                     <h4 class="card-title">cheeck for tastks</h4>
//                     <p class="card-text">you can see task for today in navbar </p>
//                 </div>
//             </div>
//         </React.Fragment>
//     );
// }
// export default Home;

class Homee extends Component {

    render() {
        return (
            <React.Fragment className='container'>
                <div className="container">
                    <h1>wellcome to home my friend </h1>
                    <div class="card text-left">

                        <div class="card-body">
                            <h4 class="card-title">cheeck for tastks</h4>
                            <p class="card-text">you can see task for today in navbar </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Homee;