import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hero from './component/layout/Hero'
import NavBar from './component/layout/NavBar';
import Home from './component/layout/Home';
import About from './component/layout/About';
import Contact from './component/layout/Contact';
import Service from './component/layout/Service';

function App() {
  return (
    <Router>
      <NavBar />
{/* <Hero/> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />

        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/service' component={Service} />
      </Switch>
    </Router>
  );
}

export default App;
