import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>OMIGOZ.COM</h1>
      <h2>Convenience at your fingertips.</h2>
      <img  src={process.env.PUBLIC_URL+'developer.jpg'} className='App-Developer'/>
    </div>
  );
}

export default App;
