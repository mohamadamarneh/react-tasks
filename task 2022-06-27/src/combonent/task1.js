import React, { Component } from 'react';

import axios from 'axios';


async function getUsers() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  
      
  
      return response;
    } catch (error) {
      console.error(error);
    }
  }




class Task1 extends Component {
    state = {
    users: [],
    sarch:""
  }

  componentDidMount =()=>{
    getUsers().then(response => {

      this.setState({

        users: response.data
      });
    });
  }


  handleChange=(e)=>{
    console.log(e.target.value)

    this.setState({sarch:e.target.value})
    
    
  }


  render() {
    return (
      <div className="App">
        <label>search :</label><input type="text" onChange={this.handleChange}  />
        <ul>
          {
          this.state.users.filter(a=> a.name.includes(this.state.sarch)).map(a=>
            <li>{a.name}</li>   )}
        </ul>
      </div>
    );
  }
}

export default Task1;