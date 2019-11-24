import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Product from './Components/Products.jsx';
import About from './Components/About.jsx';
import Cart from './Components/Cart.jsx';
import Default from './Components/Default.jsx';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/products" component={Product} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          <Route path="/" component={Home} exact/>
          <Route component={Default} />
        </Switch>
      </Router>
    );
  }
}

export default App;
