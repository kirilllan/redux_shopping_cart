import './App.css';
import React from 'react'
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar"
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import SingleItem from './components/SingleItem/SingleItem'
import { connect } from 'react-redux'

function App({ currentItem }) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          {!currentItem ? (<Redirect to="/" />) : (<Route exact path="/product/:id" component={SingleItem} />)}
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    currentItem: state.shop.currentItem
  }
}

export default connect(mapStateToProps)(App);