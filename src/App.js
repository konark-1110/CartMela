import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />

                <button className="clothes"></button>

            </div>
        </BrowserRouter>
    );
  }
}

export default App;
