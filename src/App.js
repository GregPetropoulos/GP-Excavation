import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hero from './component/layout/Hero'
import NavBar from './component/layout/NavBar';

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Hero/>
      </>
    </Router>
  );
}

export default App;
