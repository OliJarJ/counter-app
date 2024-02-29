//Filename - App.js
import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const multiply = () => {
    setCount(count * 2);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const divide = () => {
    setCount(count / 2);
  };

  // const updateNum = (e) =>{
  //   e.enteredNum();
  //  setCount(count(e.target.value));
  // };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', fontSize: '200%', postion: 'absolute', justifyContent: 'center', marginTop: '25vh', backgroundColor: '#EAF8FA', opacity: '0.9' }}>
      <div className="row" style={{ justifyContent: 'center' }}>
        <div className="column">
          {/*App Title*/}
          <h1 style={{ fontSize: '200%', position: 'relative', paddingTop: '2vh', paddingBottom: '2vh', color: '#748398'}}>The Illustrious Counter</h1>
          {/*Counter Text*/}
          <p style={{ justifyContent: 'center', paddingTop: '2vh', color:'#748398'}}>Count: {count}</p>
          {/*buttons*/}
          <div className="container mx-1.5" style={{ textAlign: 'center', paddingTop: '2vh', paddingBottom: '4vh', }}>
            <button className="mx-2" onClick={increment}>+1</button>
            <button className="mx-2" onClick={decrement}>-1</button>
            <button className="mx-2" onClick={multiply}>*2</button>
           
            <button className="mx-2" onClick={divide}>/2</button>
            <button className="mx-2" onClick={reset}>Reset</button>
          </div>
          {/*Copyright*/}
          <div className="container">
            <footer className="text-center" style={{fontSize:'16px', marginBottom:'2vh'}}>
              Copyright &copy; Oliver Jarjosa 2024
            </footer>
          </div>
        </div>
      </div>
    </div>

  )
};

export default CounterApp;




