import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  // BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Contact from './contents/Contact';
import Experience from './contents/Experience';


import ReactGA from 'react-ga';
ReactGA.initialize('UA-168137025-2');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/education">
          <Education />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/experience">
          <Experience />
        </Route>
      </div>
    </Router>
    );
  }
  
  export default App;
  