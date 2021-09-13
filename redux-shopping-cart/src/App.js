import './App.css';
import React from 'react'
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar"
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import SingleItem from './components/SingleItem/SingleItem'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/product/:id" component={SingleItem} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;