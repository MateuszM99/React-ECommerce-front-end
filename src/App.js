import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/main_components/Header'
import Cart_View from './components/cart_components/Cart_View'
import Product from './components/product_components/Product'
import Product_View from './components/product_components/Product_View';
import Product_View_Header from './components/product_components/Product_View_Header'
import Product_View_Details from './components/product_components/Product_View_Details'
import Order_View from './components/order_components/Order_View';
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
        <Route path="/products" exact>
            <Header/>
            <Product_View_Header/>
            <Product_View/>
        </Route>   
        <Route path="/products/:id" exact>
            <Header/>
            <Product_View_Header/>
            <Product_View/>        
        </Route>
        <Route path="/products/:categoryId/:productName/:productId" exact>
            <Header/>
            <Product_View_Details/>
        </Route>
        <Route path="/order">
          <Order_View/>
        </Route>
        <Route path="/checkout">
          <Order_View/>
        </Route>
        <Route path="/">
          <Header/>
          <Product_View_Header/>
          <Product_View/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
