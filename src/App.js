import React from 'react';
import Register from './components/Login/register'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Register/>
    </Router>
  );
}

export default App;
