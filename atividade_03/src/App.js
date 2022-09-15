import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <Calculo></Calculo> 

      </header>
    </div>
  );
}
function Calculo() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  

  return (
    <div>
      <p>{count} </p>
      <input type="number" onChange={event => setValue(parseInt(event.target.value))}></input>
      <br/>
      <button onClick={() => setCount(count + value)}>
        Incrementar
      </button>
      <br/>
      <button onClick={() => setCount(count - value)}>
        Decrementar
      </button>
    </div>
  );
}
export default App;
