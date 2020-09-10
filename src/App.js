import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Product from './components/Product'
import Cart_View from './components/Cart_View'

function App() {

  return (
    <div className="App">
      <Header/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>
  );
}

export default App;
