import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import React from 'react';
import Task1 from './component/Task1';
import Homee from './component/Home';
import Task2 from './component/Task2';
import Task3 from './component/Task3';

function App() {
  let st=({ isActive})=> {
    return {
      color : isActive ? "red" : "blue",
      fontSize : isActive ? "20px" : "20px"
    }
  }

  return (
    <React.Fragment>
      <Router>
        <nav class='navbar navbar-dark '>
          <h1>hello world</h1>
          <NavLink to='/' style={st} >home</NavLink >
          <NavLink to='/task1' style={st}  >Task sort</NavLink >
          <NavLink to='/task2' style={st}  >Task map</NavLink >
          <NavLink to='/task3' style={st}  >Task fillter </NavLink >
        </nav>
        <Routes class='container'>

          <Route path="/" element={<Homee />} />
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />


        </Routes>
      </Router>

    </React.Fragment>
  );
}

export default App;
