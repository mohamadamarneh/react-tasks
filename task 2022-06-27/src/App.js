import logo from './logo.svg';
import './App.css';
import React, { ReactDOM } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './combonent/Home';
import Task1 from './combonent/task1';

function App() {
  let st = ({ isActive }) => {
    return {
      class :isActive ? "nav-item Active" : "nav-item",
  
    }
  }



  return (
    <React.Fragment>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Tasks 2022/6/27</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class={st}>
                <a class="nav-link" href='/' >Home <span class="sr-only"></span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href='/Task' >Task 1</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Task 2</a>
              </li>
            </ul>
            <span class="navbar-text">
              Navbar text with an inline element
            </span>
          </div>
        </nav>



        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/Task' element={<Task1 />} ></Route>

        </Routes>
      </Router>

    </React.Fragment>
  );
}

export default App;
