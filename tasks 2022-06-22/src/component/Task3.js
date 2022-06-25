import React, { Component } from 'react';
class Task3 extends Component {
    state = {
       names: ["Khozama","Mohammad","Lujain","Nada","Ayman"]
      } 
    render() { 
        return (
            <div className='container'>
                <input type="text" onChange={this.searc()} value={Event.AT_TARGET.value}  />
                <h5>{this.state.names}</h5>

            </div>
            

        );
    }
    searc(){
        console.log(Event.AT_TARGET.value)
        
        
    }
}
 
export default Task3;