import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './componants/home/Home';
import Maintanance from './componants/maintainance/Maintanance';

function App() {
  return (
    <div>
      {/* <h1>OMiGOZ.COM</h1>
      <h2>Convenience at your fingertips.</h2>
      <img  src={process.env.PUBLIC_URL+'developer.jpg'} className='App-Developer'/> */}

      <BrowserRouter>
        <Routes>
            <Route path="/maintain" element= {<Maintanance />} />
            <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
