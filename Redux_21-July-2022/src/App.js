
import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment,decrement,reset } from './store/action';
import { useState } from 'react';
function App() {


   let [amont,setAmount]=useState(0);
    const count=useSelector((state)=>state);
    const disPatch=useDispatch();



    let a=0;
    function valor(e){
      let a =e.target.value;
      console.log(a)
      return e.target.value
    }

  return (
    <div>

      <input type={'number'} onChange={e=>setAmount(e.target.value)} /> 
        <button onClick={()=>disPatch(increment(Number(amont)))}>Increment +</button>
        <button onClick={()=>disPatch(decrement(Number(amont)))}>Decrement -</button>
        <button onClick={()=>disPatch(reset())}>reset </button>

     <h1>counter:{count} </h1>
     
    </div>
  );
}

export default App;
