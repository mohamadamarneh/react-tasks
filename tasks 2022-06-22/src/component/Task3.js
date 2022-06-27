import React, { Component } from 'react';
class Task3 extends Component {
    state = {

       names: ["khozama","mohammad","lujain","nada","ayman"],
       sarch:""

      } 
      handleChange=(e)=>{
        console.log(e.target.value)

        this.setState({sarch:e.target.value})
        
        
      }
    render() { 
        return (
            <div className='container'>
                <input type="text" onChange={this.handleChange}  />
                <h5>{this.state.names.map((a,b,c)=> b=== c.length -1 ? <span>{a}</span> :<span>{a} ,</span>)}</h5>


                <ul>{this.state.names.filter( a=> a.includes(this.state.sarch) || a.startsWith(this.state.sarch) ).map(e=> <li>{e}</li>)}</ul>

            </div>
        );
    }
    searc(){
        console.log(Event.AT_TARGET.value)
        
        
    }
}
 
export default Task3;