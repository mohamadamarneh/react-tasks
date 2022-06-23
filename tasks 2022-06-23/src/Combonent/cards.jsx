import React, { Component } from 'react';



class Cards extends Component {
    state = {
        names: ["alaa qazaq ", "mohamad amarneh", "ali", "angham"]

    }
    render() {
        return (
            <React.Fragment>


                <div class="card-group">

                    {this.state.names.map(name =>



                    <div class="card" >
                        <img class="card-img-top" src="https://picsum.photos/200" alt="" />
                        <div class="card-body">
                            <h5 class="card-title" key={name.id}>{name}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a  class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    )}

                </div>
            </React.Fragment>
        );
    }
}

export default Cards;