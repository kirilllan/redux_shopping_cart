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
    <div className="App">
      hello from App.js
    </div>
  );
}

export default App;
