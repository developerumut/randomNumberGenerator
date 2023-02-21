import './App.css';
import React, {useState} from 'react';
function App() {

  const [minimum, setMinimum] = useState(0);
  const [maximum, setMaximum] = useState(10);
  const [random, setRandom] = useState(7);

  const generateRandom = () => {
    setRandom(Math.floor(Math.random()*(maximum-minimum + 1) + minimum))
  }

  return (
    <div className="App">
     <div className="container">
      <div className="randomNumber">
        <p>Random Number: <span>{random}</span></p>
      </div>
      <div className="numberContainer">
        <div>
          <p>Min:</p>
          <input
          type="number" value={minimum} onChange={e => setMinimum(+e.target.value)}
          />
        </div>
        <div>
          <p>Max:</p>
          <input
          type="number" value={maximum} onChange={e => setMaximum(+e.target.value)}
          />
        </div>
      </div>
      <button onClick={generateRandom}>Get Random Number</button>
     </div>
    </div>
  );
}

export default App;
