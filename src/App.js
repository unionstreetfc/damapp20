import React from 'react';
import PersonCard from './PersonCard';

import logo from './logo.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <img src={logo} style={{margin: "auto", height: "52px", width: "61px"}} />
      <PersonCard />
    </div>
  );
}

export default App;
