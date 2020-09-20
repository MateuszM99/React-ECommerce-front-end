import React, { Component } from 'react'
import Product from './Product'
import '../styles/product__view__main.scss'
import { withRouter } from "../../node_modules/react-router-dom";

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
        fetch("https://localhost:44333/api/products/products" + this.props.location.search)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                products: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )

          console.log(this.props.match.params.id);
      }

      /*componentDidUpdate(){
        fetch("https://localhost:44333/api/products/products" + this.props.location.search)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                products: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }*/
      

    render() {
        const { error, isLoaded, products } = this.state;
        return (
            <section id="products__list">
                <div className="product__main">
                    <ul>
                    {products.filter(product => product.category.categoryName == this.props.match.params.id).map(product => (
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

export default (withRouter(Product_View))
