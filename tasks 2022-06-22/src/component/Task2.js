import React, { Component } from 'react';

class Task2 extends Component {
    state = { 
        Fruits : [
            {id: 1 , name: "Apple",  color: "Yellow"},
            {id: 2 , name: "Strawberry", color: "Red"},
            {id: 3 , name: "Kiwi", color: "Green"}
          ]
          
     } 
    render() { 
        
        return (
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Fruits.map(a=>
                             <tr>
                             <td scope="row">{a.id}</td>
                             <td>{a.name}</td>
                             <td>{a.color}</td>
                         </tr>
                        )
                             
                        }
              

                    </tbody>
                </table>
                
            </div>

        );
    }
}
 
export default Task2;