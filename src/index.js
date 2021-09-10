import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import { Sobrli } from "./components/Sobrli"
// import { NavBar } from "./components/nav/NavBar"

ReactDOM.render(
  <React.StrictMode>
    <Router>
  
      <Sobrli />
  
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

 