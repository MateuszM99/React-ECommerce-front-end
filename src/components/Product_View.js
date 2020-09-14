import React, { Component } from 'react'
import Product from './Product'
import '../styles/product__view__main.scss'

export class Product_View extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
          error: null,
          isLoaded: false,
          products: []
        };
      }

      componentDidMount() {
        fetch("https://localhost:44333/api/products/getProducts")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                products: result
              });
            },
            // Uwaga: to ważne, żeby obsłużyć błędy tutaj, a
            // nie w bloku catch(), aby nie przetwarzać błędów
            // mających swoje źródło w komponencie.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
      

    render() {
        const { error, isLoaded, products } = this.state;
        return (
            <section id="products__list">
                <div className="product__main">
                    <ul>
                    {products.map(product => (
                    <li key={product.productId}>
                    <Product id={product.productId} title={product.productName} price={product.productPrice} addToCart={this.addToCart}/>
                    </li>
                    ))}
                    </ul>
                </div>
            </section>
        )
    }
}

export default Product_View
