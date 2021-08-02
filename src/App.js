import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './component/layout/NavBar';

function App() {
  return (
    <Router>
      <>
        <NavBar />
      </>
    </Router>
  );
}

export default App;
