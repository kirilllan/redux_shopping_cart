import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'

import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        hiii
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  )
}

export default App