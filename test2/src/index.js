//import React, { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

import Nav from './combonents/Nav';
import Text from './combonents/Title';
import Gall from './combonents/Gallery';
import Foot from './combonents/flutter';

import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Nav />
    <Text />
    <Gall />
    <Gall />
    <Gall />
    <Foot />
  </React.StrictMode>
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
