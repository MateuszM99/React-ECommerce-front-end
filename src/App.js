import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Product from './components/Product'
import Cart_View from './components/Cart_View'
import Product_View from './components/Product_View';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "../node_modules/react-router-dom";

function App() {

  

  return (
    <Router>
    <div className="App">
      {/* http://localhost:3000/news */}
      {/* http://localhost:3000/clothing */}
      {/* http://localhost:3000/shoes */}
      {/* http://localhost:3000/accessories */}
      {/* http://localhost:3000/order */}
      {/* http://localhost:3000/checkout */}
      <Switch>
        <Route path="/">
          <Header/>
          <Product_View/>
        </Route>
        <Route path="/new">

        </Route>
        <Route path="/clothing">

        </Route>
        <Route path="/shoes">

        </Route>
        <Route path="/order">

        </Route>
        <Route path="/checkout">

        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
