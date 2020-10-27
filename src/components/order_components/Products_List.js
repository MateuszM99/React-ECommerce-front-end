import React, { Component } from 'react'
import axios from 'axios'

export class Products_List extends Component {

    constructor(props){
        super(props)

        this.state = {
            error: null,
            cartProducts: [],
            isLoaded : false
        }
    }

    getCartPrice = () => {
        var totalCartPrice = 0;
        this.state.cartProducts.forEach(cartProduct => {
            totalCartPrice += cartProduct.product.price * cartProduct.quantity;
        });

        return totalCartPrice;
      }

    componentDidMount() {
        let cartId = localStorage.getItem("cartId");
        axios.get("https://localhost:44333/api/cart/getCart?cartId=" + cartId)
          .then(
            result => {
              this.setState({
                isLoaded: true,
                cartProducts: result.data
              })
            })
            .catch(error => {
              this.setState({
                isLoaded: true,
                error
              });
            })       
    }


    render() {
        const { error, isLoaded, cartProducts } = this.state;
        if(error){
            return(
                <div>Could not load content</div>
            )
        }
        if(isLoaded == false){
            return(
                <div>Loading</div>
            )
        }
        return (
            <div className="products__list">
                    <div className="products__list__header">
                    <h4>{cartProducts.length} Items</h4>
                    </div>
                    {cartProducts.map(cartProduct => (
                    <div className="products__list__product" key={cartProduct.product.id}>
                        <img src={cartProduct.product.imageUrl}></img>
                        <span>
                            <p className="products__list__product__name">{cartProduct.product.name}</p>
                            <p className="products__list__product__size">Size: S</p>
                        </span>
                        <p className="products__list__product__quantity">{cartProduct.quantity}</p>
                        <p className="products__list__product__price">{cartProduct.product.price}$</p>
                    </div>
                    ))}
                    <div className="products__list__costs">
                        <span>
                            <p className="products__list__costs__label">Sum:</p>
                    <p className="products__list__costs__price">{this.getCartPrice()} PLN</p>
                        </span>
                        <span>
                            <p className="products__list__costs__label">Delivery:</p>
                            <p className="products__list__costs__price">{this.props.delivery}</p>
                        </span>
                    </div>
                    <div className="products__list__total">
                        <p>Total:</p>
                        <p>74.99$</p>
                    </div>
                    <div className="order__comment">
                        <p>Add comment to the order:</p>
                        <textarea></textarea>
                    </div>
            </div>           
        )
    }
}

export default Products_List
