import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './component/layout/NavBar';
import Home from './component/layout/Home';
import About from './component/layout/About';
import Contact from './component/layout/Contact';
import ServicePage from './component/layout/ServicePage';
import Projects from './component/layout/Projects';
import QuoteForm from'./component/layout/QuoteForm'


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/service' component={ServicePage} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/quote' component={QuoteForm} />


      </Switch>
    </Router>
  );
}

export default App;
