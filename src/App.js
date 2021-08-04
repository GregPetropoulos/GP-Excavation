import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hero from './component/layout/Hero'
import NavBar from './component/layout/NavBar';
import Contact from './component/layout/Contact'

function App() {
  return (
    <Router>
{/*       
        <NavBar />
        <Hero/> */}
      
      <Switch>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
