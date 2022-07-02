import './App.css';

import { BrowserRouter as Router, Routes, Route, Link,NavLink } from 'react-router-dom';

import Flix from './component/net';

function App() {
  let st=({ isActive})=> {
    
    return {
      color : isActive ? "red" : "blue",
      fontSize : isActive ? "20px" : "20px"
    }

  }
  return (

    <Router>
      <nav class='navbar navbar-dark '>
        <div><NavLink to='/'><img src='3182ab63017b263e4b19c93746710c69.png' /></NavLink></div>
       <NavLink to='/'    style={ st } >home</NavLink >
        <NavLink to='/contact'  style={ st }  >contact</NavLink >
        <NavLink to='/about'  style={ st }  >about</NavLink >
        <NavLink to='/categury'  style={ st }  >categury </NavLink >
      </nav>
      <Routes>

        <Route path="/" element={<Flix />} />
        <Route path="/contact" element={<Flix />} />
        <Route path="/about/:username" element={<Flix />} />
        <Route path="/categury" element={<Flix />} />

      </Routes>

    </Router>

  );
}

export default App;