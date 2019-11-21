import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Fashion from './Components/Fashion.jsx';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/Fashion">
            <Fashion />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
