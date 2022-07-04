import React, { useState, createContext, ReactDOM } from 'react';
import './App.css';
import About from './component/About';


export const userContext = createContext()
function App() {
  

  const [namer, setNamer] = useState('ali');

  const [user, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
    console.log('value is:', event.target.value);
  };

  

  return (
    
    <userContext.Provider value={user}>
       <div>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={user}
      />
      <h2>Message: {user}</h2>
    </div>
      <h1>{`hii ${user}`}</h1>
      <About />
    </userContext.Provider>
  );
}

export default App;
