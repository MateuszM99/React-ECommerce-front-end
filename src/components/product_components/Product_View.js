import React, { Component } from 'react'
import Product from '../product_components/Product'
import '../../styles/product_styles/product__view__main.scss'
import { withRouter } from "react-router-dom";

export class Product_View extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
          error: null,
          isLoaded: false,
          products: [],
          searchQuery : "",
        };
      }

      getProductsData = () => {
        this.setState({searchQuery : this.props.location.search});
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
      }

      componentDidMount() {
        this.getProductsData();
      }

      componentDidUpdate(){
        if(this.state.searchQuery != this.props.location.search)
        this.getProductsData();
      }
      

    render() {
        const { error, isLoaded, products } = this.state;
        return (
            <section id="products__list">
                <div className="product__main">
                    <ul>
                    {products.map(product => (
                    <li key={product.id}>
                    <Product id={product.id} title={product.name} price={product.price} image={product.imageUrl} category={product.categoryName} addToCart={this.addToCart}/>
                    </li>
                    ))}
                    </ul>
                </div>
            </section>
        )
    }
}

export default (withRouter(Product_View))
